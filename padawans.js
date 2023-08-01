const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt').toString('utf8');
  return names.split('\n');
}

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf8');
  return scores.split('\n').map(Number);
}

function getStats() {
  const array1 = getPadawanNames();
  const array2 = getLightsaberScores();
  const newArray = array1.map((value, index) => [value, array2[index]]);

  return newArray;
}

function writeStats() {
  const dataF = getStats();
  const newInfo = fs.writeFileSync('data/stats.txt', dataF, 'utf8');
  return newInfo;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
