#!/usr/bin/env ts-node
var import__ = require("../index.js");
(0, import__.generateRepositories)().catch((err) => {
  console.error("Error generating repositories:", err.message);
});
//# sourceMappingURL=cli.js.map
