#! /usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { generateRepositories } = require("../cjs");

const argv = yargs(hideBin(process.argv))
    .scriptName("")
    .usage("Usage: npx prisma-repository-generator --init")
    .option("init", {
        describe: "Initialize repository generator",
        type: "boolean",
        demandOption: true,
    })
    .parse();

if (argv.init) {
    generateRepositories().catch((err) => {
        console.error("Error generating repositories:", err);
    });
}
