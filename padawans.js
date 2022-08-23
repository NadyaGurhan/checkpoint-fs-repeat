const fs = require('fs');

const getPadawanNames = () => fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');

const getLightsaberScores = () => fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((el, i) => [el, scores[i]]);
}

function writeStats() {
  const stats = getStats();
  const noComma = stats.map((el) => el.join(' '));
  return fs.writeFileSync('./data/stats.txt', noComma.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
