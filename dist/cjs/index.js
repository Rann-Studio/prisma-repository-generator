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
var import_fs = __toESM(require("fs"));
var import_handlebars = __toESM(require("handlebars"));
var import_path = __toESM(require("path"));
var import_prettier = __toESM(require("prettier"));
var import_helper = require("./utils/helper.js");
const saveRepository = /* @__PURE__ */ __name(async (repo, content) => {
  const repositoriesDir = import_path.default.resolve(process.cwd(), "generated_repositories");
  if (!import_fs.default.existsSync(repositoriesDir)) {
    import_fs.default.mkdirSync(repositoriesDir);
  }
  const formattedCode = await import_prettier.default.format(content, {
    parser: "typescript",
    semi: true,
    singleQuote: true,
    useTabs: true,
    tabWidth: 4
  });
  const filePath = import_path.default.resolve(repositoriesDir, `${(0, import_helper.lowerCaseFirst)(repo)}.repository.ts`);
  import_fs.default.writeFileSync(filePath, formattedCode, "utf8");
  console.log(`Saved: ${filePath}`);
}, "saveRepository");
const savePrismaUtils = /* @__PURE__ */ __name(async () => {
  const repositoriesDir = import_path.default.resolve(process.cwd(), "generated_repositories");
  if (!import_fs.default.existsSync(repositoriesDir)) {
    import_fs.default.mkdirSync(repositoriesDir);
  }
  const prismaUtilsContent = `import { PrismaClient } from "@prisma/client"; export const client = new PrismaClient();`;
  const formattedCode = await import_prettier.default.format(prismaUtilsContent, {
    parser: "typescript",
    semi: true,
    singleQuote: true,
    useTabs: true,
    tabWidth: 4
  });
  const filePath = import_path.default.resolve(repositoriesDir, `prisma.utils.ts`);
  import_fs.default.writeFileSync(filePath, formattedCode, "utf8");
  console.log(`Saved: ${filePath}`);
}, "savePrismaUtils");
const compileTemplate = /* @__PURE__ */ __name((templateFile) => {
  const templatePath = import_path.default.resolve(__dirname, "../template", templateFile);
  const templateSource = import_fs.default.readFileSync(templatePath, "utf8");
  return import_handlebars.default.compile(templateSource, { noEscape: true });
}, "compileTemplate");
const generateRepositories = /* @__PURE__ */ __name(async () => {
  if (!import_client.Prisma.dmmf || !import_client.Prisma.dmmf.datamodel) {
    throw new Error("Prisma.dmmf or Prisma.dmmf.datamodel is not available. Make sure you run `prisma generate` after setting up your schema.");
  }
  const models = import_client.Prisma.dmmf.datamodel.models;
  const template = compileTemplate("repository.hbs");
  for (const model of models) {
    const content = template({
      repo: model.name,
      table: (0, import_helper.lowerCaseFirst)(model.name)
    });
    await saveRepository(model.name, content);
  }
  await savePrismaUtils();
  console.log("Repositories generated successfully.");
}, "generateRepositories");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  generateRepositories
});
//# sourceMappingURL=index.js.map
