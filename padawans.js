const fs = require('fs')

function getPadawanNames() {
  const result = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return result.trim().split('\n');
};

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores.trim().split('\n').map((el) => +el);
};

function getStats() {
  const stats = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < names.length; i += 1) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
};

function writeStats() {
  const stats = getStats();
  const statsData = stats.map((stat) => stat.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', statsData);
};


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
