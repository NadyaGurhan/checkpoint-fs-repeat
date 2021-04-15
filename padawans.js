const fs = require('fs')

function getPadawanNames () {
  let data = fs.readFileSync('./data/padawans.txt', 'utf8')
  return data.trim().split('\n')
}
function getLightsaberScores () {
  let data = fs.readFileSync('./data/scores.txt', 'utf8')
  let dataArr = data.split('\n').map(el => +el)
  return dataArr
}
function getStats () {
  let padawans = getPadawanNames()
  let scores = getLightsaberScores()
  let newArr = []
  for (let i = 0; i < padawans.length; i++) {
    newArr.push([padawans[i], scores[i]])
  }
  return newArr
}

function writeStats () {
  let data = getStats()
  dataNew = data.join('\n').replace(/,/gmi, ' ')
  fs.writeFileSync('./data/stats.txt', dataNew)
  return dataNew
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
