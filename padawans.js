const fs = require("fs");

function getPadawanNames() {
  const readNames = fs.readFileSync("./data/padawans.txt", "utf-8");
  return readNames.split('\n');
}

function getLightsaberScores() {
  const readScores = fs.readFileSync("./data/scores.txt", "utf-8");
  let scores = [];
  return scores.push(parseInt(readScores[i]));
}

function getStats() {
  let stats = [];
  for (let i=0; i < readNames.length; i += 1) {
    stats.push(readNames[i]);
    for (let j = 0; j < scores.length; j += 1) {
      stats[i].push(readScores[j]);
    }
  }
  return stats;
}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
