const fs = require('fs');

const sum = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
const res = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
function getPadawanNames() {
  return res;
}
function getLightsaberScores() {
  const res = sum.map((el) => Number(el));
  return res;
}
function getStats() {
  const arr = [];
  const padawan = getPadawanNames();
  const saber = getLightsaberScores();
  for (let i = 0; i < padawan.length; i += 1) {
    arr.push([padawan[i], saber[i]]);
  }
  return arr;
}
function writeStats() {
  const first = getStats().map((el) => el.join(' '));
  return fs.writeFileSync('./data/stats.txt', first.join('\n'));
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
