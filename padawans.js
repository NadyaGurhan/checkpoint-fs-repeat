const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};


function getPadawanNames() {
  const padavanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').filter(word => word.length > 0)
  return padavanNames
};

console.log(getPadawanNames())

function getLightsaberScores() {
  const sabersScore = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  return sabersScore
};

