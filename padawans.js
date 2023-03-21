const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt', 'utf8');
  const res = names.split('\n');
  return res;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf8');
  scores.split('\n');
}

// function getStats() {

// }

// function writeStats() {

// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
