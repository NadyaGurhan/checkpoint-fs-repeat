const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = [];
  names.push(fs.readFileSync('data/padawans.txt', 'utf8'));
  return names
}

function getLightsaberScores() {
  const names = [];
  names.push(fs.readFileSync('data/scores.txt', 'utf8'));
  return names
}

function getStats() {

}

function writeStats() {

}