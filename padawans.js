const fs = require('fs');

const padawans = fs.readFileSync('data/padawans.txt').toString().split('\n').slice(0, -1);
const scores = fs.readFileSync('data/scores.txt').toString().split('\n').map((item) => Number(item));

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores;
}

function getStats() {
  const stats = [];
  for (let i = 0; i < scores.length; i += 1) {
    stats.push([padawans[i], scores[i]]);
  }
  return stats;
}

function writeStats(stats) {
  for (let i = 0; i < scores.length; i += 1) {
    fs.appendFileSync('data/stats.txt', `${stats[i][0]} ${stats[i][1]}\n`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
