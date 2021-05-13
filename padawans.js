const fs = require('fs')

function getPadawanNames() {
  const padawansStr = fs.readFileSync('./data/padawans.txt', 'utf-8')
  const padawanArr = padawansStr.split('\n')
  padawanArr.pop()
  return padawanArr
}

function getLightsaberScores() {
  const scoresStr = fs.readFileSync('./data/scores.txt', 'utf-8')
  const scoresArr = scoresStr.split('\n')
  const scoresNum = scoresArr.map((el) => {
    return Number(el)
  })
  return scoresNum
}

function getStats() {
  const padArr = getPadawanNames()
  const scArr = getLightsaberScores()
  let arr = []
  arr = padArr.map((el, i) => {
    let newArr = []
    newArr.push(el, scArr[i])
    return newArr
  })
  return arr
}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
