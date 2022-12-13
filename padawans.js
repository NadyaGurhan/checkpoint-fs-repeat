const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return names;
}

console.log(getPadawanNames());

function getLightsaberScores() {
  const lightScorced = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return lightScorced.map((el) => Number(el));
}
console.log(getLightsaberScores());

function getStats() {
  const padNameArr = getPadawanNames();
  const lightScoreArr = getLightsaberScores();
  const newArr = [];
  for (let i = 0; i < padNameArr.length; i++) {
    newArr.push([padNameArr[i], lightScoreArr[i]]);
  }
  return newArr;
}

console.log(getStats());

function writeStats() {

}
