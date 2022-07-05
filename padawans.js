const fs = require('fs');

function getPadawanNames() {
  const padavan = fs.readFileSync('data/padawans.txt', 'utf8');
  return padavan.trim().split('\n');
}

function getLightsaberScores() {
  const score = fs.readFileSync('data/scores.txt', 'utf8').split('\n');;
  return score.map((el) => Number(el));
}

function getStats() {
  const padavan = getPadawanNames();
  const score = getLightsaberScores();
  const stat = padavan.map((el, i) => [el, score[i]]);
  return stat;
}

function writeStats(a) {
  const file = fs.writeFileSync('data/stats.txt', a.join('\n').split(',').join(' '));
  return file;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
