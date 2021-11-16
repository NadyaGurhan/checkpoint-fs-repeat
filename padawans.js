const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  return names;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  return scores.forEach((num) => +num);
}
function getStats() {
  const arr = `${getPadawanNames}, ${getLightsaberScores}`;
  return [arr];
}
function writeStats() {
  // const data = getStats();
  // return fs.writeFileSync('./data/stats.txt', data.join('\n'));
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
