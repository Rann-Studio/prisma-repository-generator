var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var helper_exports = {};
__export(helper_exports, {
  lowerCaseFirst: () => lowerCaseFirst,
  prismaTypeToTs: () => prismaTypeToTs,
  upperCaseFirst: () => upperCaseFirst
});
module.exports = __toCommonJS(helper_exports);
const upperCaseFirst = /* @__PURE__ */ __name((str) => str.charAt(0).toUpperCase() + str.slice(1), "upperCaseFirst");
const lowerCaseFirst = /* @__PURE__ */ __name((str) => str.charAt(0).toLocaleLowerCase() + str.slice(1), "lowerCaseFirst");
const prismaTypeToTs = /* @__PURE__ */ __name((type) => {
  switch (type) {
    case "Int":
      return "number";
    case "String":
      return "string";
    case "Boolean":
      return "boolean";
    case "DateTime":
      return "Date";
    default:
      return "unknown";
  }
}, "prismaTypeToTs");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  lowerCaseFirst,
  prismaTypeToTs,
  upperCaseFirst
});
//# sourceMappingURL=helper.js.map
