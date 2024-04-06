const fs = require('fs');
// const { STATUS_CODES } = require('http');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8');
  const x = names.split('\n');
  return x.filter((el) => el !== '');
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf8');
  return score.split('\n').map(Number);
}

function getStats() {
  const stats = [];
  const score = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  for (let i = 0; i < score.length; i++) {
    stats.push([names[i], +score[i]]);
  }
  return stats;
}

function writeStats(stats) {
  const newStr = stats.join('\n').replaceAll(',', ' ');
  fs.writeFileSync('./data/stats.txt', newStr, 'utf8');
}
