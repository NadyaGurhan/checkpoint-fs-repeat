const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
const data = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
console.log(score);

function getPadawanNames() {
  return data;
}

function getLightsaberScores() {
  const res = score.map((el) => +el);
  return res;
}
function getStats() {
  const arr = [];
  const name = getPadawanNames();
  const scores = getLightsaberScores();
  const result = name.map((el, i) => arr.concat(name[i], scores[i]));
  return result;
}
function writeStats() {
  const first = getStats().map((el) => el.join(' '));
  return fs.writeFileSync('./data/stats.txt', first.join('\n'));
}
