const fs = require('fs');

function getPadawanNames() {
  const namesTxt = fs.readFileSync('data/padawans.txt', 'utf-8').trim();
  return namesTxt.split('\n');
}

function getLightsaberScores() {
  const scoresTxt = fs.readFileSync('data/scores.txt', 'utf-8').trim();
  return scoresTxt.split('\n').map((el) => +el);
}

function getStats() {
  const stats = [[], [], [], []];
  for (let i = 0; i < stats.length; i++) {
    stats[i].push(getPadawanNames()[i]);
    stats[i].push(getLightsaberScores()[i]);
  }
  return stats;
}

function writeStats(stats) {
  let str = '';
  for (let i = 0; i < stats.join('\n').length; i++) {
    if (stats.join('\n')[i] !== ',') {
      str += stats.join('\n')[i];
    } else {
      str += ' ';
    }
  }
  fs.writeFileSync('data/stats.txt', str);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
