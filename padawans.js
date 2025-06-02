const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.split(EOL).filter(el => el.trim())
}

function getLightsaberScores() {
  const numbers = fs.readFileSync('./data/scores.txt', 'utf-8');
  const numArray = numbers.split(EOL).map((el) => Number(el));
  return numArray;
}

function getStats() {

}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
