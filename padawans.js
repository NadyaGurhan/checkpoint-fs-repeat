const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map(Number);
}
function getStats() {
  const padawan = getPadawanNames();
  const lightScore = getLightsaberScores();
  return padawan.map((name, index) => [name, lightScore[index]]);
}

function writeStats(stats) {
  const data = stats.map((index) => index.join(' ')).join('\n');
  fs.writeFileSync('./data/stats.txt', data);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
