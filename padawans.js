const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  padawans.pop();
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => +el);
  return scores;
}

function getStats() {
  const arr = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i++) {
    arr.push([padawans[i], scores[i]]);
  }
  return arr;
}

function writeStats() {
  const stats = getStats();
  return fs.appendFileSync('./data/stats.txt', `${stats.join('\n').split(',')
    .join(' ')}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
