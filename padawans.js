const fs = require('fs');

function getPadawanNames() {
  const text = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  text.pop();
  return text;
}

function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => +el);
}

function getStats() {
  const padawansNames = getPadawanNames();
  const padawanScores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < padawansNames.length; i += 1) {
    stats.push([padawansNames[i], padawanScores[i]]);
  }
  return stats;
}

function writeStats() {
  const stats = getStats()
    .map((el) => el.join(' '))
    .join('\n');
  fs.writeFileSync('./data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
