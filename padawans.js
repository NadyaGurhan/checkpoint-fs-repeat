const fs = require('fs');

function getPadawanNames() {
  const result = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return result;
}
// console.log(getPadawanNames());
function getLightsaberScores() {
  const result = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => +el);
  return result;
}
// console.log(getLightsaberScores());
function getStats() {
  const stats = [];
  for (let i = 0; i < getPadawanNames().length || i < getLightsaberScores().length; i++) {
    stats.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return stats;
}
// console.log(getStats());
function writeStats(stats) {
  const result = stats.map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', result, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
