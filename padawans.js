const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map(el => parseFloat(el));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((el, i) => [el, scores[i]]);
}

function writeStats() {
  const result = getStats();
  const filtr = result.map(([names, scores]) => `${names} ${scores}`).join('\n');
  fs.writeFileSync('data/stats.txt', filtr);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
