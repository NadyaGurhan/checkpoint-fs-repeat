const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt').toString('utf8');
  return names.split(',');
}

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt').toString('utf8');
  return scores.split(',');
}

function getStats() {
  const array1 = getPadawanNames();
  const array2 = getLightsaberScores();
  const newArray = array1.concat(array2);
  const newText = newArray.join(',');
  fs.writeFileSync('data/stats.txt', newText);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
};
