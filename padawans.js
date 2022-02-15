const fs = require("fs");
const readPadawans = fs.readFileSync("./data/padawans.txt", "utf8");
const readScores = fs.readFileSync("./data/scores.txt", "utf8");

function getPadawanNames() {
  return readPadawans.split("\n").filter((el) => el);
}

function getLightsaberScores() {
  return readScores
    .split("\n")
    .filter((el) => el)
    .map((s) => +s);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
