const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const fs = require('fs');

function getPadawanNames() {
  const arr = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');

  arr.pop();
  return arr;
}

function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf8')
    .split('\n')
    .map((el) => +el);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const stat = [];
  return Array.from({ length: 4 }, (el, i) => [padawans[i], scores[i]]);
}
console.log(getStats());
function writeStats() {
  const arr = getStats()
    .map((el) => el.join(' '))
    .join('\n');
  fs.writeFileSync('./data/stats.txt', arr);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
