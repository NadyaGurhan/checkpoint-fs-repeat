const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').split('\r\n').filter((name) => name !== '');
}
function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').split('\r\n').filter((score) => score !== '').map((score) => Number(score));
}
function getStats() {
  return new Array(getPadawanNames().length).fill(0).map((item, index) => [getPadawanNames()[index], getLightsaberScores()[index]]);
}
function writeStats() {
  fs.writeFileSync('./data/stats.txt', getStats().map((item) => item.join(' ')).join('\n'));
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
