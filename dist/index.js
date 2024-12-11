import { Prisma } from "@prisma/client";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import Handlebars from "handlebars";
import { resolve } from "path";
import { format } from "prettier";
function lowerCaseFirst(str) {
    return str.charAt(0).toLocaleLowerCase() + str.slice(1);
}
function ensureDirectoryExists(dirPath) {
    if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true });
    }
}
function saveFile(filePath, content) {
    writeFileSync(filePath, content, "utf8");
    console.log(`Saved: ${filePath}`);
}
async function formatCode(content) {
    return await format(content, {
        parser: "typescript",
        semi: true,
        singleQuote: true,
        useTabs: true,
        tabWidth: 4,
    });
}
function compileTemplate() {
    const templatePath = resolve(__dirname, "template.hbs");
    const templateSource = readFileSync(templatePath, "utf8");
    return Handlebars.compile(templateSource, { noEscape: true });
}
async function savePrismaUtils() {
    const dir = resolve(process.cwd(), "generated_repositories");
    ensureDirectoryExists(dir);
    const content = `import { PrismaClient } from "@prisma/client"; export const client = new PrismaClient();`;
    const formattedCode = await formatCode(content);
    const filePath = resolve(dir, "prisma.utils.ts");
    saveFile(filePath, formattedCode);
}
async function saveRepository(repo, content) {
    const dir = resolve(process.cwd(), "generated_repositories");
    ensureDirectoryExists(dir);
    const formattedCode = await formatCode(content);
    const filePath = resolve(dir, `${lowerCaseFirst(repo)}.repository.ts`);
    saveFile(filePath, formattedCode);
}
export async function generateRepositories() {
    if (!Prisma.dmmf?.datamodel) {
        throw new Error(`Prisma.dmmf or Prisma.dmmf.datamodel is not available. Run "npx prisma migrate dev --name init" to ensure schema is initialized.`);
    }
    const models = Prisma.dmmf.datamodel.models;
    const template = compileTemplate();
    for (const model of models) {
        const content = template({
            repo: model.name,
            table: lowerCaseFirst(model.name),
        });
        await saveRepository(model.name, content);
    }
    await savePrismaUtils();
    console.log("Repositories generated successfully.");
}
