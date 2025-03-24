const fs = require('fs');
const { EOL } = require('os');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');

  return names.trim().split('\n');
}

console.log(getPadawanNames());

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

  return scores.split('\n').map((el) => +el);
}

console.log(getLightsaberScores());

function getStats() {
  const newArr = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  names.forEach((name, i) => newArr.push([name, scores[i]]));
  return newArr;
}
console.log(getStats());
