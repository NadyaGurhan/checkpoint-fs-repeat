const fs = require('fs');

function getPadawanNames() {
  let data = fs.readFileSync("./data/padawans.txt", "utf8").split("\n");
  data.pop();
  return data;
}

function getLightsaberScores() {
  fs.readFileSync("./data/scores.txt", "utf8").split("\n").map(x => parseFloat(x));
  return fs.readFileSync("./data/scores.txt", "utf8").split("\n").map(x => parseFloat(x));
}

function getStats() {
  let name = getPadawanNames();
  let score = getLightsaberScores();
  return name.map((x, i) => [x, score[i]]);
}

function writeStats(stats) {
  stats = stats.map(x=> x.join(" ")).join("\n");
  fs.writeFileSync("./data/stats.txt", stats)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
