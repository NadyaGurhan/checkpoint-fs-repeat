const fs = require('fs');

function getPadawanNames() {
  return fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n')
    .slice(0, -1);
}
function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => Number(el));
}

function getStats() {
  const x = getPadawanNames();
  const y = getLightsaberScores();
  const arr = [];
  for (let i = 0; i < x.length; i += 1) {
    const pArr = [];
    pArr.push(x[i], y[i]);
    arr.push(pArr);
  }
  return arr;
}
function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
