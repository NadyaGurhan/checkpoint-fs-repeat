const fs = require("fs");
const padawanNamesFile = "./data/padawans.txt";
const padawanSctoresFile = "./data/scores.txt";

function getPadawanNames() {
  return fs.readFileSync(padawanNamesFile, "utf8").trim().split("\n");
}
function getLightsaberScores() {
  return fs
    .readFileSync(padawanSctoresFile, "utf8")
    .split("\n")
    .map((x) => Number(x));
}

function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();

  return names.map((elem, i) => [elem, scores[i]]);
}
console.log(getStats());
// .map((elem) => elem.join(",").replace(",", " ")).join("\n"))

function writeStats() {
  let tmp = getStats()
    .map((elem) => elem.join(",").replace(",", " "))
    .join("\n");

  fs.writeFileSync("data/stats.txt", tmp);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
