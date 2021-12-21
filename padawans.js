const fs = require('fs')

const pathToData = '/data/'

function getLightsaberScores() {
  const textScores = fs.readFileSync(__dirname+pathToData+'scores.txt', 'utf8')
  return textScores.trim().split('\n').map(item => +item)
}
function getPadawanNames() {
  const textPadawans = fs.readFileSync(__dirname+pathToData+'padawans.txt', 'utf8')
  return textPadawans.trim().split('\n')
}
function getStats() {
  const arrPadawans = getPadawanNames()
  const arrScores = getLightsaberScores()
  return arrPadawans.map((item,index) => [item,arrScores[index]])
}
function writeStats() {
  const stats = getStats()
  const textToWrite = stats
      .map(item => item.join(' '))
      .join('\n')
  fs.writeFileSync(__dirname+pathToData+'stats.txt',textToWrite,'utf8')
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
