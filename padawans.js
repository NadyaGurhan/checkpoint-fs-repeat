const fs = require('fs');

console.log(fs.readFileSync('./data/padawans.txt', 'utf8'));

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8');
}
console.log(getPadawanNames());

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8');
}
console.log(getLightsaberScores());

function getStats() {
  const arr = [];
  for(let i)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
