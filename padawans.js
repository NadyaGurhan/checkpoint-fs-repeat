const fs = require('fs')
let padawans = fs.readFileSync('./data/padawans.txt', 'utf8')
let scores = fs.readFileSync('./data/scores.txt', 'utf8')
console.log(padawans)
function getPadawanNames() {
  let result = padawans.split('\n')
  result.pop()
  return result
}

function getLightsaberScores() {
  let result = scores.split('\n')
  result.pop()
  return result
}
function getStats() {}
function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}
