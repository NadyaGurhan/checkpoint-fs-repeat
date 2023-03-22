const fs = require("fs");

function getPadawanNames() {
  const padawans = fs.readFileSync("data/padawans.txt", "utf-8").split("\n");
  return padawans.filter((el) => el !== "");
}

function getLightsaberScores() {
  const scores = fs.readFileSync("data/scores.txt", "utf-8").split("\n");
  return scores.map((el) => Number(el));
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const newArr = [];
  const stats = padawans.map((el, i) => newArr.push([el, scores[i]]));
  return newArr;
}

function writeStats() {
  const stats = getStats().join("\n").replace(/,/g, " ");
  fs.writeFileSync("data/stats.txt", stats);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
