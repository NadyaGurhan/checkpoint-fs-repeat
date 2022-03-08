const { readFileSync } = require('fs');

function getPadawanNames() {
  const padavanList = readFileSync('./data/padawans.txt', 'utf-8');
  const newList = padavanList.split('\n');
  return newList;
}
function getPadawanScores() {
  const scoresList = readFileSync('./data/scores.txt', 'utf-8');
  const newList = scoresList.split('\n');
  return newList;
}

console.log(getPadawanScores(), getPadawanNames());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
