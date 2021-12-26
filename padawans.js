const fs = require('fs');

const padawans = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
padawans.pop();

const scores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores.map((item) => +item);
}

function getStats() {
  const arr3 = padawans.map((item, index) => [item, +scores[index]]);
  const content = arr3.reduce((accum, item) => `${accum + item.join(' ')}\n`, '');
  fs.writeFileSync('data/stats.txt', content);
  return arr3;
}

function writeStats() {
  const content = padawans.reduce((accum, item, index) => `${accum + item} ${scores[index]}\n`, '');
  fs.writeFileSync('data/stats.txt', content);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
