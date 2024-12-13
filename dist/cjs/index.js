var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var esm_exports = {};
__export(esm_exports, {
  generateRepositories: () => generateRepositories
});
module.exports = __toCommonJS(esm_exports);
var import_client = require("@prisma/client");
var import_fs = require("fs");
var import_handlebars = __toESM(require("handlebars"), 1);
var import_path = require("path");
var import_prettier = require("prettier");
function lowerCaseFirst(str) {
  return str.charAt(0).toLocaleLowerCase() + str.slice(1);
}
__name(lowerCaseFirst, "lowerCaseFirst");
function ensureDirectoryExists(dirPath) {
  if (!(0, import_fs.existsSync)(dirPath)) {
    (0, import_fs.mkdirSync)(dirPath, { recursive: true });
  }
}
__name(ensureDirectoryExists, "ensureDirectoryExists");
function saveFile(filePath, content, overwrite) {
  if ((0, import_fs.existsSync)(filePath) && overwrite === false) {
    console.log(`Skipped: ${filePath} already exists.`);
    return;
  }
  (0, import_fs.writeFileSync)(filePath, content, "utf8");
  console.log(`Saved: ${filePath}`);
}
__name(saveFile, "saveFile");
async function formatCode(content) {
  return await (0, import_prettier.format)(content, {
    parser: "typescript",
    semi: true,
    singleQuote: true,
    useTabs: true,
    tabWidth: 4
  });
}
__name(formatCode, "formatCode");
function compileTemplate() {
  const templatePath = (0, import_path.resolve)(__dirname, "..", "template", "template.hbs");
  const templateSource = (0, import_fs.readFileSync)(templatePath, "utf8");
  return import_handlebars.default.compile(templateSource, { noEscape: true });
}
__name(compileTemplate, "compileTemplate");
async function savePrismaUtils(overwrite) {
  const dir = (0, import_path.resolve)(process.cwd(), "generated_repositories");
  ensureDirectoryExists(dir);
  const content = `import { PrismaClient } from "@prisma/client"; export const client = new PrismaClient();`;
  const formattedCode = await formatCode(content);
  const filePath = (0, import_path.resolve)(dir, "prisma.utils.ts");
  saveFile(filePath, formattedCode, overwrite);
}
__name(savePrismaUtils, "savePrismaUtils");
async function saveRepository(repo, content, overwrite) {
  const dir = (0, import_path.resolve)(process.cwd(), "generated_repositories");
  ensureDirectoryExists(dir);
  const formattedCode = await formatCode(content);
  const filePath = (0, import_path.resolve)(dir, `${lowerCaseFirst(repo)}.repository.ts`);
  saveFile(filePath, formattedCode, overwrite);
}
__name(saveRepository, "saveRepository");
async function generateRepositories(overwrite = false) {
  if (!import_client.Prisma.dmmf?.datamodel) {
    throw new Error(`Run "npx prisma migrate dev --name init" to ensure schema is initialized.`);
  }
  const models = import_client.Prisma.dmmf.datamodel.models;
  const template = compileTemplate();
  for (const model of models) {
    const content = template({
      repo: model.name,
      table: lowerCaseFirst(model.name)
    });
    await saveRepository(model.name, content, overwrite);
  }
  await savePrismaUtils(overwrite);
  console.log("Repositories generated successfully.");
}
__name(generateRepositories, "generateRepositories");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateRepositories
});
//# sourceMappingURL=index.js.map
