#!/usr/bin/env ts-node

import { generateRepositories } from "..";

generateRepositories().catch((err) => {
    console.error("Error generating repositories:", err.message);
});
