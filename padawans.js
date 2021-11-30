
const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
function getPadawanNames() {
  padawans.splice(4)
  return padawans

}
getPadawanNames()

function getLightsaberScores() {
  scores.splice(4)
  arrSxores = []
  console.log(scores)
  for(let i = 0; i < scores.length; i++) {
    
  }
  return scores
}
getLightsaberScores()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
