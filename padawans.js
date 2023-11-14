const fs = require('fs');

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawanNames;
}

function getLightsaberScores() {
  const saberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return saberScores;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
