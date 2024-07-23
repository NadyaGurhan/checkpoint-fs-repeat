const fs = require('fs')

function getPadawanNames () {
  return  fs.readFileSync('data/padawans.txt', 'utf-8').trim().split('\n')
}
function getLightsaberScores () {
  return  fs.readFileSync('data/scores.txt', 'utf-8').trim().split('\n').map(el => +el)
}
function getStats () {
  const padawansArr = [...getPadawanNames()]
  const scoresArr = [...getLightsaberScores()]
  const newArr = []
  for (let i = 0; i < padawansArr.length; i++){
    newArr.push([padawansArr[i], scoresArr[i]])
  }
  return newArr
}

function writeStats() {
  const statsArr = [...getStats()].map(el => el.join(' ')).join('\n')
  return fs.writeFileSync('./data/stats.txt', `${statsArr}`, 'utf-8')
}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
