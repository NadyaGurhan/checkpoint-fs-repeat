const fs = require('fs');

function getPadawanNames() {
  const arr = [];
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n').slice(0, -1);
  arr.push(read);
  return arr.flat();
}

function getLightsaberScores() {
  const lvl = fs.readFileSync('./data/scores.txt', 'utf-8').split('\r\n');
  return lvl.map((el) => Number(el));
}

function getStats() {
  const names = getPadawanNames();
  const score = getLightsaberScores();
  const arr = [];

  names.map((el, i) => arr.push([el, score[i]]));
  return arr;
}

console.log(getStats());

function writeStats() {
  const heroScore = getStats().join('\n').replace(/,/g, ' ');
  fs.writeFileSync('./data/stats.txt', heroScore);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
