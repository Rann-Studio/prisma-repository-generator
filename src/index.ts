import { Prisma } from "@prisma/client";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import Handlebars from "handlebars";
import { resolve } from "path";
import { format } from "prettier";

const toPascalCase = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const toCamelCase = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);

const convertPrismaType = (type: string): string => {
    switch (type) {
        case "BigInt":
            return "bigint";
        case "Boolean":
            return "boolean";
        case "Bytes":
            return "Uint8Array";
        case "DateTime":
            return "Date";
        case "Decimal":
            return "string";
        case "Float":
            return "number";
        case "Int":
            return "number";
        case "Json":
            return "object";
        case "String":
            return "string";
        default:
            return "unknown";
    }
};

const ensureDirectory = (dirPath: string) => {
    if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
    }
};

const formatCode = async (content: string) =>
    await format(content, {
        parser: "typescript",
        semi: true,
        singleQuote: true,
        useTabs: true,
        tabWidth: 4,
    });

const writeFile = (filePath: string, content: string, overwrite: boolean) => {
    if (existsSync(filePath) && !overwrite) {
        console.log(`Skipped: ${filePath} already exists.`);
        return;
    }
    writeFileSync(filePath, content, "utf8");
    console.log(`Saved: ${filePath}`);
};

const compileTemplate = (templatePath: string) => {
    const source = readFileSync(templatePath, "utf8");
    return Handlebars.compile(source, { noEscape: true });
};

const generateFindByIdMethod = (upperKey: string, lowerKey: string, keyType: string, table: string) => `
static findBy${upperKey} = async (${lowerKey}: ${keyType}) => {
    return await this.client.${table}.findFirst({ where: { ${lowerKey} } });
};\n`;

const generateFindByUniqueMethod = (upperKey: string, lowerKey: string, keyType: string, table: string) => `
static findBy${upperKey} = async (${lowerKey}: ${keyType}) => {
    return await this.client.${table}.findFirst({ where: { ${lowerKey} } });
};\n`;

const saveRepository = async (repo: string, content: string, overwrite: boolean) => {
    const dir = resolve(process.cwd(), "PRG_repositories");
    ensureDirectory(dir);

    const formattedContent = await formatCode(content);
    const filePath = resolve(dir, `${toCamelCase(repo)}.repository.ts`);
    writeFile(filePath, formattedContent, overwrite);
};

const savePrismaUtils = async (overwrite: boolean) => {
    const dir = resolve(process.cwd(), "PRG_repositories");
    ensureDirectory(dir);

    const content = `import { PrismaClient } from "@prisma/client"; export const client = new PrismaClient();`;
    const formattedContent = await formatCode(content);
    const filePath = resolve(dir, "prisma.utils.ts");

    writeFile(filePath, formattedContent, overwrite);
};

const replacePlaceholders = async (filePath: string, idContent: string, uniqueContent: string) => {
    const fileData = readFileSync(filePath, "utf8");
    const updatedData = fileData.replace(/\/\/ PRG_FIND_BY_ID/g, idContent).replace(/\/\/ PRG_FIND_BY_UNIQUE/g, uniqueContent);

    const formattedCode = await formatCode(updatedData);
    writeFileSync(filePath, formattedCode, "utf8");
};

export const generateRepositories = async (overwrite: boolean = false) => {
    if (!Prisma.dmmf?.datamodel) {
        throw new Error(`Ensure schema is initialized by running "npx prisma migrate dev --name init".`);
    }

    const template = compileTemplate(resolve(__dirname, "..", "template", "template.hbs"));
    const models = Prisma.dmmf?.datamodel?.models || [];

    await savePrismaUtils(overwrite);

    for (const model of models) {
        let findByIdMethods = "";
        let findByUniqueMethods = "";

        model.fields.forEach((field) => {
            if (field.kind === "scalar" && field.isId) {
                findByIdMethods += generateFindByIdMethod(toPascalCase(field.name), field.name, convertPrismaType(field.type), toCamelCase(model.name));
            }

            if (field.kind === "scalar" && field.isUnique) {
                findByUniqueMethods += generateFindByUniqueMethod(toPascalCase(field.name), field.name, convertPrismaType(field.type), toCamelCase(model.name));
            }
        });

        let content = template({
            repo: model.name,
            table: toCamelCase(model.name),
        });

        await saveRepository(model.name, content, overwrite);

        const filePath = resolve(process.cwd(), "PRG_repositories", `${toCamelCase(model.name)}.repository.ts`);
        await replacePlaceholders(filePath, findByIdMethods, findByUniqueMethods);
    }

};
