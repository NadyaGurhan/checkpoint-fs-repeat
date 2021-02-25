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
  
  // return getPadawanNames().map ( x => x,...getLightsaberScores() )
  getPadawanNames().forEach ( (el) => el + [...getLightsaberScores()])

}

console.log(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
