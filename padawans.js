const fs = require('fs')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const listPadawan = fs.readFileSync('./data/padawans.txt', 'utf-8')
  const arrPadawan = listPadawan.split('\n')
  return arrPadawan
}

function getLightsaberScores() {
  const listScores = fs.readFileSync('./data/scores.txt', 'utf-8')
  const arrScores = listScores.split('\n')
  const arrNumber = []
  arrScores.forEach((item) => {arrNumber.push(Number(item))})
  return arrNumber
}

function getStats() {
  const arrPadawan = getPadawanNames()
  const arrScores = getLightsaberScores()
  const arrStats = []
  arrPadawan.forEach((item, index) => {
    arrStats.push([arrPadawan[index], arrScores[index]])
  })
  return arrStats
}

function writeStats() {
  const arrStats = getStats()
  let str = ''
  let returnStr = ''
  arrStats.forEach((itemSt, index) => {
    str += itemSt.join(' ')})
}
