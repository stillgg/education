const fs = require("fs");

// Improbability
// assumption: file always exists
{
  fs.readFile("./filename.ext", "utf8", (err, data) => {
    const found = data.includes("substring");
    console.log(found);
  });
}


