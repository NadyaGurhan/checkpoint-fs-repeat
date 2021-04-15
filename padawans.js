const fs = require("fs");

const getName = fs.readFileSync("./data/padawans.txt", "utf-8");
const getScores = fs.readFileSync("./data/scores.txt", "utf-8");

function getPadawanNames() {
  return getName.trim().split("\n");
}

function getLightsaberScores() {
  return getScores.split("\n").map(Number);
}

function getStats() {
  return getPadawanNames().map((elem, i) => [elem, getLightsaberScores()[i]]);
}

function writeStats() {
  return fs.writeFileSync(
    "./data/stats.txt",
    getStats()
      .map((el) => el.join(" "))
      .join("\n")
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
