const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  fs.readFileSync('../data/padawans.txt', 'utf-8');
}
console.log(getPadawanNames());

function getLightsaberScores() {
  fs.readFileSync('../data/scores.txt', 'utf8');
}
console.log(getLightsaberScores());

function getStats() {
  const first = getPadawanNames()
  const second = getLightsaberScores()
  fs.writeFileSync('../data/stats.txt', first, second)
}

function writeStats() {
  fs.appendFileSync ('./data/stats.txt')
}
console.log(writeStats())