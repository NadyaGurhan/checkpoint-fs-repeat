const fs = require('fs')

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8')
  return padawanNames.split('\n').slice(0, -1)
}

function getLightsaberScores() {
  const padawanNames = fs.readFileSync('./data/scores.txt', 'utf-8')
  return padawanNames.split('\n').map((el) => Number(el))
}

function getStats(arr1, arr2) {
  arr1 = getPadawanNames()
  arr2 = getLightsaberScores()
  for(let i = 0; i < arr2.length; i++) {
    arr1[i].push(arr2[i])
    return arr1
  }
}

function writeStats(arr) {
 let normData = arr.join('\n')
fs.appendFileSync('./data/stats.txt', normData)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
