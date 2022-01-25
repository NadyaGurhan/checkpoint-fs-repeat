const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, 4);
  return names;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((i) => Number(i));
  return scores;
}

function getStats() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, 4);
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((i) => Number(i));
  return names.map((el, i) => [el, scores[i]]);
}

function writeStats() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, 4);
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((i) => Number(i));
  const stats = names.map((el, i) => [el, scores[i]]).join('\n').split(',').join(' ');
  return fs.writeFileSync('./data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
