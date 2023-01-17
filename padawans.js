const fs = require('fs');

// console.log(padawans);
function getPadawanNames() {
  const str = (fs.readFileSync('./data/padawans.txt', 'utf-8'));
  let arr = [];
  arr = str.split('\n').slice(0, -1);
  return arr;
}
function getLightsaberScores() {
  const str = (fs.readFileSync('./data/scores.txt', 'utf-8'));
  let arr = [];
  arr = str.split('\n').map((el) => Number(el));

  return arr;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = names.map((el, i) => ([el, scores[i]]));
  return stats;
}

function writeStats() {
  const stats = getStats();
  const data1 = stats.map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', data1);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
