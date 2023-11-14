const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
}

function getLightsaberScores() {
  const scorStr = fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n');
  const numbers = scorStr.map(Number);
  return numbers;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = new Array(padawans.length);

  for (let i = 0; i < padawans.length; i++) {
    stats[i] = new Array(2);
    stats[i][0] = padawans[i];
    stats[i][1] = Number.parseFloat(scores[i]);
  }
  return stats;
}

function writeStats(stats, path) {
  path = 'data/stats.txt';
  const statString = new Array(stats.length);

  for (let i = 0; i < stats.length; i++) {
    statString[i] = stats[i].join(' ');
  }
  fs.writeFileSync(path, statString.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
