const fs = require("fs");

function getPadawanNames() {
  const padawanNamesArr = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split("\r\n");
  padawanNamesArr.pop();
  return padawanNamesArr;
}

//console.log(getPadawanNames());
module.exports = getPadawanNames;
