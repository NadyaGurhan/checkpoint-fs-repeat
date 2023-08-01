const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() { return padawans; }
console.log(getPadawanNames());

function getLightsaberScores() {
  const array = [];
  for (let i = 0; i < scores.length; i++) {
    array.push(Number(scores[i]));
  }

  return array;
}
console.log(getLightsaberScores());

function getStats() {
  const array = [];
  const result = [];
  for (let i = 0; i < padawans.length; i++) {
    array.push(padawans[i]);
    array.push(Number(scores[i]));
  }
  for (let i = 0; i < array.length; i++) {
    const chunk = array.slice(i, i + 1);
    result.push(chunk);
  }
  return result;
}
console.log(getStats());

function writeStats() { }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
