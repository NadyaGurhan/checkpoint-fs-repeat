const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, 4);
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  const scoresNum = scores.map((elem) => Number(elem));
  return scoresNum;
}

function getStats() {
}

function writeStats() {
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
