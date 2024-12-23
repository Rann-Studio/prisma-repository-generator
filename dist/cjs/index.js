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
var import_handlebars = __toESM(require("handlebars"));
var import_path = require("path");
var import_prettier = require("prettier");
const toPascalCase = /* @__PURE__ */ __name((str) => str.charAt(0).toUpperCase() + str.slice(1), "toPascalCase");
const toCamelCase = /* @__PURE__ */ __name((str) => str.charAt(0).toLowerCase() + str.slice(1), "toCamelCase");
const convertPrismaType = /* @__PURE__ */ __name((type) => {
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
}, "convertPrismaType");
const ensureDirectory = /* @__PURE__ */ __name((dirPath) => {
  if (!(0, import_fs.existsSync)(dirPath)) {
    (0, import_fs.mkdirSync)(dirPath, { recursive: true });
  }
}, "ensureDirectory");
const formatCode = /* @__PURE__ */ __name(async (content) => await (0, import_prettier.format)(content, {
  parser: "typescript",
  semi: true,
  singleQuote: true,
  useTabs: true,
  tabWidth: 4
}), "formatCode");
const writeFile = /* @__PURE__ */ __name((filePath, content, overwrite) => {
  if ((0, import_fs.existsSync)(filePath) && !overwrite) {
    console.log(`Skipped: ${filePath} already exists.`);
    return;
  }
  (0, import_fs.writeFileSync)(filePath, content, "utf8");
  console.log(`Saved: ${filePath}`);
}, "writeFile");
const compileTemplate = /* @__PURE__ */ __name((templatePath) => {
  const source = (0, import_fs.readFileSync)(templatePath, "utf8");
  return import_handlebars.default.compile(source, { noEscape: true });
}, "compileTemplate");
const generateFindByIdMethod = /* @__PURE__ */ __name((upperKey, lowerKey, keyType, table) => `
static findBy${upperKey} = async (${lowerKey}: ${keyType}) => {
    return await this.client.${table}.findFirst({ where: { ${lowerKey} } });
};
`, "generateFindByIdMethod");
const generateFindByUniqueMethod = /* @__PURE__ */ __name((upperKey, lowerKey, keyType, table) => `
static findBy${upperKey} = async (${lowerKey}: ${keyType}) => {
    return await this.client.${table}.findFirst({ where: { ${lowerKey} } });
};
`, "generateFindByUniqueMethod");
const saveRepository = /* @__PURE__ */ __name(async (repo, content, overwrite) => {
  const dir = (0, import_path.resolve)(process.cwd(), "PRG_repositories");
  ensureDirectory(dir);
  const formattedContent = await formatCode(content);
  const filePath = (0, import_path.resolve)(dir, `${toCamelCase(repo)}.repository.ts`);
  writeFile(filePath, formattedContent, overwrite);
}, "saveRepository");
const savePrismaUtils = /* @__PURE__ */ __name(async (overwrite) => {
  const dir = (0, import_path.resolve)(process.cwd(), "PRG_repositories");
  ensureDirectory(dir);
  const content = `import { PrismaClient } from "@prisma/client"; export const client = new PrismaClient();`;
  const formattedContent = await formatCode(content);
  const filePath = (0, import_path.resolve)(dir, "prisma.utils.ts");
  writeFile(filePath, formattedContent, overwrite);
}, "savePrismaUtils");
const replacePlaceholders = /* @__PURE__ */ __name(async (filePath, idContent, uniqueContent) => {
  const fileData = (0, import_fs.readFileSync)(filePath, "utf8");
  const updatedData = fileData.replace(/\/\/ PRG_FIND_BY_ID/g, idContent).replace(/\/\/ PRG_FIND_BY_UNIQUE/g, uniqueContent);
  const formattedCode = await formatCode(updatedData);
  (0, import_fs.writeFileSync)(filePath, formattedCode, "utf8");
}, "replacePlaceholders");
const generateRepositories = /* @__PURE__ */ __name(async (overwrite = false) => {
  if (!import_client.Prisma.dmmf?.datamodel) {
    throw new Error(`Ensure schema is initialized by running "npx prisma migrate dev --name init".`);
  }
  const template = compileTemplate((0, import_path.resolve)(__dirname, "..", "template", "template.hbs"));
  const models = import_client.Prisma.dmmf?.datamodel?.models || [];
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
      table: toCamelCase(model.name)
    });
    await saveRepository(model.name, content, overwrite);
    const filePath = (0, import_path.resolve)(process.cwd(), "PRG_repositories", `${toCamelCase(model.name)}.repository.ts`);
    await replacePlaceholders(filePath, findByIdMethods, findByUniqueMethods);
  }
}, "generateRepositories");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateRepositories
});
//# sourceMappingURL=index.js.map
