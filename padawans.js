const fs = require('fs');
const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  return padawanNames.filter((el) => el !== '');
}
console.log(getPadawanNames());

function getLightsaberScores() {
  return scores.map((el) => Number(el));
}
console.log(getLightsaberScores());

function getStats() {
  const count = [];
  for (let i = 0; i < scores.length; i++) {
    count.push([padawanNames[i], Number(scores[i])]);
  }
  return count;
}
console.log(getStats());

function writeStats() {
  const count = [];
  for (let i = 0; i < scores.length; i++) {
    count.push([padawanNames[i], scores[i]]).join(' ');
  }
  return count.join('\n');
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
