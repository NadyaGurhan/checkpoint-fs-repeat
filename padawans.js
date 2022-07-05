const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
}
//console.log(getPadawanNames());

function getLightsaberScores() {
  return (fs.readFileSync('./data/scores.txt', 'utf8').split('\n')).map((el) => +el);
}
//console.log(getLightsaberScores());

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  return padawans.map((el, i) => [el, scores[i]]);
}
//console.log(getStats())

function writeStats() {
  return fs.writeFileSync('./data/stats.txt', getStats().join('\n').replace(/,/gi, ' '), 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
