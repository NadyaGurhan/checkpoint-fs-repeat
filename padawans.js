const fs = require('fs');

const file = fs.readFileSync('./data/padawans.txt', 'utf-8');
const score = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const arr = file.split('\n');
  arr.pop();
  return arr;
}
function getLightsaberScores() {
  const arr = score.split('\n');
  const newArr = arr.map((str) => Number(str));
  return newArr;
}
function getStats() {
  const padNames = getPadawanNames();
  const scores = getLightsaberScores();
  const newArr = [];
  for (let i = 0; i < padNames.length; i += 1) {
    newArr.push([padNames[i], scores[i]]);
  }
  return newArr;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
