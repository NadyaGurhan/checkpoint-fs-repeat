const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('data/padawans.txt', 'utf8').trim().split('\n');
}
function getLightsaberScores() {
  return fs.readFileSync('data/scores.txt', 'utf-8').split('\n')
    .map((el) => el * 1);
}

function getStats() {
  const padawan = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < padawan.length; i++) {
    result.push([padawan[i], scores[i]]);
  }
  return result;
}
function writeStats() {
  const data = getStats()
  return fs.writeFileSync('data/stats.txt', data.join('\n').replace(/,/g, ' '))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
