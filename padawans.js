const fs = require('fs')
function getPadawanNames (){
  const text = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\r\n')
  console.log(text)
  return text
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\r\n')
  console.log(scores)
  return scores
}

function getStats() {
  const table = 
}
getPadawanNames()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
