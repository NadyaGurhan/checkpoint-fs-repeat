const fs = require("fs");

const padawans = fs
  .readFileSync(__dirname + "/data/padawans.txt", "utf8")
  .split("\r\n");

const scores = fs
  .readFileSync(__dirname + "/data/scores.txt", "utf8")
  .split("\r\n");

function getPadawanNames() {
  return padawans.slice(0, 4);
}
function getLightsaberScores() {
  return scores.map((el) => +el);
}
function getStat() {
  return padawans.push(scores);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
