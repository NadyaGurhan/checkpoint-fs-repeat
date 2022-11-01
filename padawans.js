const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, 4);
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  const scoresNum = scores.map((elem) => Number(elem));
  return scoresNum;
}

function getStats() {
  const stats = [];
  for (let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], getLightsaberScores()[i]]);
  }
  return stats;
}

function writeStats() {
  const stats = getStats();
  const formatedStats = stats.map((stat) => stat.join(' '));
  fs.writeFileSync('./data/stats.txt', formatedStats.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
