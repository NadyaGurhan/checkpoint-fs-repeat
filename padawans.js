const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawans
    .split('\n')
    .slice(0, -1);
}
function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores.split('\n').map((el) => Number(el));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, i) => [name, scores[i]]);
}

function writeStats(x) {
  fs.writeFileSync('./data/stats.txt', x.join('\n').replace(/,/g, ' '));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
