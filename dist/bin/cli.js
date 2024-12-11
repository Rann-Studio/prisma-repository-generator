#! /usr/bin/env node

const yargs = require("yargs/yargs");
const { exec } = require("child_process");
const { hideBin } = require("yargs/helpers");
const { generateRepositories } = require("../cjs");
const fs = require("fs");
const path = require("path");

// Function to execute commands
const runSilent = async (cmd) => {
    const child = exec(cmd, {
        stdio: "ignore", // Ignore stdout and stderr
    });
    await new Promise((resolve) => child.on("close", resolve));
};
// Function to ensure the dependency is installed
const ensureDependencyInstalled = async () => {
    const packagePath = path.resolve(__dirname, "../../node_modules/prisma-repository-generator");

    if (!fs.existsSync(packagePath)) {
        await runSilent("npm i prisma-repository-generator");
    }
};

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
    ensureDependencyInstalled().then(() => {
        generateRepositories().catch((err) => {
            console.error("Error generating repositories:", err);
        });
    });
}
