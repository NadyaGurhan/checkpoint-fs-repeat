const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8').split(EOL)
  return data
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf-8').split(EOL)
  return data;
}
console.log(getLightsaberScores());

function getStats() {
  const data = fs.readFileSync('data/scores.txt', 'padawans.txt', 'utf-8');
  return data;
}
console.log(getStats());

function writeStats() {
  
}
console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
