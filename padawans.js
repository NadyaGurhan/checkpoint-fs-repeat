const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  return padawans.trim().split(('\n'));
}

function getLightsaberScores() {
  const arr = scores.split('\n').sort((a, b) => b - a).map((it) => Number(it));
  return arr;
}

function getStats() {
  let i = -1;
  const padavansArr = padawans.trim().split(('\n'));
  const scoresArr = scores.split('\n').sort((a, b) => b - a).map((it) => Number(it));
  const stats = padavansArr.map((el, i) => [el, scoresArr[i]]);
  return stats;
}

function writeStats() {
  let stats = getStats();
  let padavans = fs.writeFileSync('./data/stats.txt', stats.map((el) => el.join(' ')).join('\n'), 'utf8');
  return padavans;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
