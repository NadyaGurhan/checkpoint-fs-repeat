const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
  return names;
}

function getLightsaberScores() {
  const res = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((sc) => +sc);
  // console.log(res);
  return res;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = padawans.map((el, i) => [el, scores[i]]);
  return stats;
}

function writeStats() {
  const stats = getStats().join('\n').replace(/,/gmi, ' ');
  fs.appendFileSync('./data/stats.txt', `${stats}`);
  // console.log(stats);
}
// console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
