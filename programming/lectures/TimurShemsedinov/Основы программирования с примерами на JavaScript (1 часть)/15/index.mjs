import { readFile } from "node:fs/promises";

const res = await readFile("./index.mjs", "utf-8");
console.log(res);

console.log("end");
