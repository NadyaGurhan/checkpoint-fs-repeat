const fs = require('fs');

// const myFile = fs.readFileSync('data/padawans.txt', 'utf-8');
// console.log(myFile.split('\n'));
function getPadawanNames() {
  const myFile = fs.readFileSync('data/padawans.txt', 'utf-8');
  return myFile.trim().split('\n');
}
function getLightsaberScores() {
  const myFile = fs.readFileSync('data/scores.txt', 'utf-8');
  return myFile.trim().split('\n').map(Number);
}
console.log(getLightsaberScores());
function getStats() {
  const myFile = fs.readFileSync('data/padawans.txt', 'utf-8');
  const myFile1 = fs.readFileSync('data/scores.txt', 'utf-8');
  return myFile.trim().split('\n');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
