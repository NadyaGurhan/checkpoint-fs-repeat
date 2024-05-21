const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawans.trim().split('\n');
}

function getLightsaberScores() {
  const LightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return LightsaberScores.trim()
    .split('\n')
    .map((el) => parseFloat(el));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, index) => [name, scores[index]]);
}

function writeStats(stats) {
  const data = stats.map(([name, score]) => `${name} ${score}`).join('\n');
  fs.writeFileSync('./data/stats.txt', data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
