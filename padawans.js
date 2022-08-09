const fs = require('fs')

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.trim().split('\n');
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf-8');
  return score.trim().split('\n').map((el) => +el);
};


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,getLightsaberScore
};
