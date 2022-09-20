const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawanNames = read.split('\n').pop();
  return padawanNames;
}

function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8');
  const score = read.split('\n');
  return score;
}
function getStats() {
  let names = getPadawanNames();
  let score = getLightsaberScores();
  let stats = [];
 

}
function writeStats() {}
function getStats() {}

