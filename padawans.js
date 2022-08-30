const fs = require('fs');
const path = require('path');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  padawan.pop();
  return padawan;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  return scores;
}

function getStats() {

}

function writeStats() {

}