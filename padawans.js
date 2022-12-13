const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
function getPadawanNames() {
  return padawans;
}
function getLightsaberScores() {
  return scores.map((el) => +el);
}
function getStats() {
  const newArr = [];
  const name = getPadawanNames();
  const score = getLightsaberScores();
  const res = name.map((el, i) => newArr.concat(name[i], score[i]));
  return res;
}
function writeStats() {
  const data = getStats();
  const newArr = data.map((el) => el.join(' ').join('\n'));
  return fs.writeFileSync('./data/stats.txt', newArr);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
