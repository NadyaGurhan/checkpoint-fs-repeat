const fs = require('fs');
const { EOL } = require('os');
const padawnsList = fs.readFileSync('./data/padawans.txt', 'utf-8');
const grades = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawnsList.trim().split(EOL);
}

function getLightsaberScores() {
  return grades.split(EOL).map(Number);
}

function getStats() {
  return getPadawanNames().map((name, index) => [
    name,
    Number(getLightsaberScores()[index]),
  ]);
}

function writeStats() {
  return fs.writeFileSync('./data/stats.txt', getStats().join(EOL).replace(/,/g, ' '));
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
