const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('data/padawans.txt').toString().split('\n').slice(0, -1);
}

function getLightsaberScores() {
  return fs.readFileSync('data/scores.txt')
    .toString()
    .split('\n')
    .map((scoreString) => +scoreString);
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
