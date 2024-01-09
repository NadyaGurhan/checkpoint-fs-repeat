const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}; 

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
}


function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores.split('\n').map((score) => Number(score));
}
