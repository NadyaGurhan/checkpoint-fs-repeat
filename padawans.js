const fs = require('fs');

function getPadawanNames() {
  const result = fs.readFileSync('data/padawans.txt', 'utf8')
    .trim()
    .split('\n');
  return result;
}
//console.log(getPadawanNames());

function getLightsaberScores() {
  return fs.readFileSync('data/scores.txt', 'utf8')
    .trim()
    .split('\n')
    .map((el) => Number(el));
}
//console.log(getLightsaberScores());

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, index) => [name, scores[index]]);
}
//console.log(getStats());

function writeStats(stats) {
  const data = stats.map((el) => el.join(' '))
    .join('\n');
  fs.writeFileSync('data/stats.txt', data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
