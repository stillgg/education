const fs = require("fs");

const print = (fileName, err, data) => {
  console.log("read from", fileName);
  console.log({ lines: data.split("\n").length });
};

const fileName = "./index.js";
const fn = print.bind(null, fileName);

fs.readFile(fileName, "utf-8", fn);

console.log("end");
