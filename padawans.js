const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}
function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => Number(el));
}
function getStats() {
  const name = getPadawanNames();
  const scores = getLightsaberScores();
  return name.map((el, i) => [name[i], scores[i]]);
}
function writeStats() {
  return fs.writeFileSync(
    './data/stats.txt',
    `${getStats().join('\n').replaceAll(',', ' ')}`,
  );
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
