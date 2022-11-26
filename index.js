const fs = require("fs");
const path = require("path");

function getPadawanNames() {
  const filePath = path.resolve(__dirname, "data", "padawans.txt");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const padawans = fileContent.trim().split("\n");
  console.log(padawans);
  return padawans;
}
getPadawanNames();
module.exports = getPadawanNames;
