const fs = require('fs');
const path = require('path');

const padawans = fs.readFileSync(path.join(__dirname, './data/padawans.txt'), 'utf8').trim().split('\n');
const scores = fs.readFileSync(path.join(__dirname, './data/scores.txt'), 'utf8').trim().split('\n').map((el) => Number(el));

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores;
}

function getStats() {
  const stats = [];
  for (let i = 0; i < padawans.length; i++) {
    stats.push([padawans[i], scores[i]]);
  }
  return stats;
}

function writeStats(stats) {
  const newStats = stats.map((el) => el.join(' '));
  fs.writeFileSync(
    path.join(__dirname, './data/stats.txt'),
    newStats.join('\n'),
    'utf8',
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
