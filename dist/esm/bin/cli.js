#!/usr/bin/env ts-node
import { generateRepositories } from "../index.js";
generateRepositories().catch((err) => {
    console.error("Error generating repositories:", err.message);
});
