/* eslint-disable */

const fs = require("fs");
function getPadawanNames() {
  const getName = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .trim()
    .split("\n");
  return getName;
}

function getLightsaberScores() {
  const getScore = fs.readFileSync("data/scores.txt", "utf-8");
  const scores = getScore.split("\n").map((item) => Number(item));
  return scores;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  stats = names.map((padawanName, i) => [padawanName, scores[i]]);
  return stats;
}
function writeStats() {
  const stats = getStats().join("\n");
  fs.writeFileSync("data/stats.txt", stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
