const fs = require('fs');
const _ = require('lodash');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawansArray = padawans.split('\n');
  const arr = padawansArray.filter((el) => el.length > 0);
  return arr;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const arr = scores.split('\n');
  const arrScores = arr.map((el) => parseFloat(el));
  return arrScores;
}

function getStats() {
  const scores = getLightsaberScores();
  const names = getPadawanNames();
  return _.zip(names, scores);
}

function writeStats(stats) {
  const statsStr = stats
    .map((el) => el.join(' '))
    .join('\n');
  fs.writeFileSync('data/stats.txt', statsStr);
}

console.log(writeStats(getStats()));

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
