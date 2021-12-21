
const fs = require('fs')
const padawans = fs.readFileSync('./data/padawans.txt', 'utf8')
const scores = fs.readFileSync('./data/scores.txt', 'utf8')

function getPadawanNames() {
  return padawans.trim().split('\n')
}


function getLightsaberScores() {
return scores.split('\n')
console.log(scores);
}
function getStats() {
  const newScores = getLightsaberScores()
  const newPadawans = getPadawanNames();
  let result = []
  for (let i = 0; i < newPadawans.length; i++) {
    result.push([newPadawans[i], newScores[i]])
  }
  return result
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
