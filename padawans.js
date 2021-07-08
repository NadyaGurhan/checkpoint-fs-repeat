const fs = require('fs')

function getPadawanNames() {
  let namesFromTxt = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let arrOfNames = namesFromTxt.split('\n')
  arrOfNames.pop()
  return arrOfNames
}

function getLightsaberScores() {
  let scoresFromTxt = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  let arrOfScores = scoresFromTxt.map((el) => +el)
  return arrOfScores
}

function getStats() {
  let names = getPadawanNames()
  let scores = getLightsaberScores()
  let result = []
  let middleResult = []
  for (let i = 0; i < 4; i += 1) {
    middleResult.push(names[i], scores[i])
    result.push(middleResult)
    middleResult = []
  }
  return result
}

function writeStats() {
  let wholeArr = getStats().join('\n').replace(/,/g, ' ')
  return fs.writeFileSync('data/stats.txt', wholeArr, 'utf-8')
}

console.log(writeStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}
