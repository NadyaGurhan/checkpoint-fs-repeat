const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(el => +el)
}

function getStats() {
  const padawan = getPadawanNames();
  const score = getLightsaberScores();
  return padawan.map((el, index) => [padawan[index], score[index]])
}

function writeStats() {
  const stats = getStats();
  const st = stats.map(el => el.join(' ')).join('\n');
  return fs.writeFileSync('./data/stats.txt', st)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
