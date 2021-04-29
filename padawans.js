const fs = require("fs");

function getPadawanNames() {
  return fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split("\n")
    .slice(0, -1);
}

function getLightsaberScores() {
  return fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .map((el) => +el);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  //writeStats,
};
