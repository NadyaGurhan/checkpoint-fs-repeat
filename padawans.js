const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\r\n');
}

function getLightsaberScores() {
  const ligthScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return ligthScores.trim().split('\n').map((elem) => parseFloat(elem));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, index) => [name, scores[index]]);
}

function writeStats(stats) {
  const filtr = stats.map(([name, scores]) => `${name} ${scores}`).join('\n');
  fs.writeFileSync('./data/stats.txt', filtr);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

