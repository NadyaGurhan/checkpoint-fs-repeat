const fs = require("fs");

function getPadawanNames() {
  const names = readDataFromTxtFile("padawans.txt");

  return names;
}
console.log(getPadawanNames());

function readDataFromTxtFile(fileName) {
  return fs
    .readFileSync(`./data/${fileName}`, "utf-8")
    .split("\n")
    .slice()
    .map((el) => el.split(", "));
}
console.log(readDataFromTxtFile("padawans.txt"));

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
