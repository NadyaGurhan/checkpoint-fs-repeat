const fs = require('fs');

// const getPadawanNames = fs.readFileSync('./data/padawans.txt');
// const getLightsaberScores = fs.readFileSync('./data/scores.txt')
function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawans.trim().split('\n')
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores.split('\n')
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
