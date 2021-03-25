const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim('').split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').trim('').split('\n')
    .map((el) => +el);
}
function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  // console.log(names.map((el, i) => [el, scores[i]]));
  return names.map((el, i) => [el, scores[i]]);
}
function writeStats() {
  const stats = getStats();
  return fs.writeFileSync('./data/stats.txt', stats.map((el) => el.join(' ')).join('\n'));
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

console.log([
  ['Revan', 99.9],
  ['Bastila Shan', 92],
  ['Jolee Bindo', 87],
  ['Juhani', 82],
].map((el) => el.join(' ')).join('\n'))
