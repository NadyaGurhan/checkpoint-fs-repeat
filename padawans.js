const fs = require('fs');

const data = fs.readFileSync('/Users/makedonskyy/Desktop/phase-1/checkpoint-fs/data/padawans.txt', 'utf-8');
const scale = fs.readFileSync('/Users/makedonskyy/Desktop/phase-1/checkpoint-fs/data/scores.txt', 'utf-8');
function getPadawanNames() {
  const names = data.split('\n');
  const allNames = names.slice(0, names.length - 1);
  return allNames;
}

function getLightsaberScores() {
  const score = scale.split('\n');
  const allScore = score.map(Number);
  return allScore;
}
console.log(getLightsaberScores());

function getStats() {}
function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
