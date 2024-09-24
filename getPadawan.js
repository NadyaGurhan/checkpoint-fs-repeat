const fs = require("fs");
const padawans = fs.readFileSync("./data/padawans.txt", "utf-8");

function getPadawanNames() {
  const names = padawans.split("\n").slice(0, -1);
  return names;
}
getPadawanNames()
console.log(getPadawanNames());

