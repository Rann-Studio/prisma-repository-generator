import { Prisma } from "@prisma/client";
import fs from "fs";
import Handlebars from "handlebars";
import path from "path";
import prettier from "prettier";
import { lowerCaseFirst } from "./utils/helper.js";
// Save repository file to the file system with formatting
const saveRepository = async (repo, content) => {
    const repositoriesDir = path.resolve(process.cwd(), "generated_repositories");
    if (!fs.existsSync(repositoriesDir)) {
        fs.mkdirSync(repositoriesDir);
    }
    const formattedCode = await prettier.format(content, {
        parser: "typescript",
        semi: true,
        singleQuote: true,
        useTabs: true,
        tabWidth: 4,
    });
    const filePath = path.resolve(repositoriesDir, `${lowerCaseFirst(repo)}.repository.ts`);
    fs.writeFileSync(filePath, formattedCode, "utf8");
    console.log(`Saved: ${filePath}`);
};
const savePrismaUtils = async () => {
    const repositoriesDir = path.resolve(process.cwd(), "generated_repositories");
    if (!fs.existsSync(repositoriesDir)) {
        fs.mkdirSync(repositoriesDir);
    }
    const prismaUtilsContent = `import { PrismaClient } from "@prisma/client"; export const client = new PrismaClient();`;
    const formattedCode = await prettier.format(prismaUtilsContent, {
        parser: "typescript",
        semi: true,
        singleQuote: true,
        useTabs: true,
        tabWidth: 4,
    });
    const filePath = path.resolve(repositoriesDir, `prisma.utils.ts`);
    fs.writeFileSync(filePath, formattedCode, "utf8");
    console.log(`Saved: ${filePath}`);
};
const compileTemplate = (templateFile) => {
    const templatePath = path.resolve(__dirname, "../template", templateFile);
    const templateSource = fs.readFileSync(templatePath, "utf8");
    return Handlebars.compile(templateSource, { noEscape: true });
};
export const generateRepositories = async () => {
    // Safety check to ensure Prisma DMMF is initialized
    if (!Prisma.dmmf || !Prisma.dmmf.datamodel) {
        throw new Error("Prisma.dmmf or Prisma.dmmf.datamodel is not available. Make sure you run `prisma generate` after setting up your schema.");
    }
    const models = Prisma.dmmf.datamodel.models;
    const template = compileTemplate("repository.hbs");
    for (const model of models) {
        const content = template({
            repo: model.name,
            table: lowerCaseFirst(model.name),
        });
        await saveRepository(model.name, content);
    }
    await savePrismaUtils();
    console.log("Repositories generated successfully.");
};
