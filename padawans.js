const fs = require('fs')

function getPadawanNames() {
  return fs.readFileSync('../data/padawans.txt', 'utf8').split('\n');
}
function getLightsaberScores() {
  return fs.readFileSync('../data/score.txt', 'utf8').split('\n');
}
function getStats() {
  let result = [];
  for (let i = 0; i < getPadawanNames().length; i += 1) {
    result.push(`${getPadawanNames[i]} ${getLightsaberScores[i]}`.split(' '));
  }
  return result;
}
function writeStats() {
  return fs.writeFileSync('../data/stats.txt', `${getStats().join(',')}`);
}
console.log(getLightsaberScores());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
