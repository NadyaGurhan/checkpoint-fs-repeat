const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  return padawans.trim().split(('\n'));
}

function getLightsaberScores() {
  const arr = scores.split('\n').sort((a, b) => b - a).map((it) => Number(it));
  return arr;
}

function getStats() {
  return padavans
}

function writeStats() {
  return padavans
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
