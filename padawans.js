const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync("data/padawans.txt", "utf-8").trim().split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync("data/scores.txt", "utf-8").trim().split('\n').map((el) => Number(el));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  return names.map((name, index) => [name, scores[index]]);
}

const writeStats = (stats) => {
  const data = stats.map((el) => el.join(" ")).join("\n");
  fs.writeFileSync("data/stats.txt", data);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

