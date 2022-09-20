const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').splice(0, 4);
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => +el);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < names.length; i += 1) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
}

function writeStats() {
  return fs.writeFileSync('./data/stats.txt', `${getStats().join('\n').split(',').join(' ')}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
