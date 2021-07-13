const fs = require('fs');

const arrNames = [[], [], [], []];

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, 4);
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((num) => Number(num));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((el, i) => [el, scores[i]]);
}

function writeStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  fs.appendFileSync('data/stats.txt', `${names.map((el, i) => [el, scores[i]]).join('\n').replace(/,/g, ' ')}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
