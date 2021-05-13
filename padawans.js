const fs = require("fs");

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padawan = fs.readFileSync("data/padawans.txt", "utf-8");
  return padawan.trim().split("\n");
}

function getLightsaberScores() {
  const scores = fs.readFileSync("data/scores.txt", "utf-8");
  return scores.split("\n");
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  let newArr = [];
  names.forEach((item, index, arr) => {
    newArr.push([names[index], +scores[index]]);
  });
  return newArr;
}

function writeStats(stats) {
  stats = getStats();
  stats.map((item) => {
    return item;
  });
  fs.appendFileSync("data/stats.txt", stats, "utf-8");
}

writeStats(getStats());
