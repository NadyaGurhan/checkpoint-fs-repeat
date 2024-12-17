const fs = require('fs')

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt')
  return names.toString().split(`\n`)
}

function getLightsaberScores () {
  const score = fs.readFileSync('data/scores.txt')
  const scoreArr = score.toString().split(`\n`)
  const arr = []
  for (let i = 0; i < scoreArr.length; i++) {
    arr.push(Number(scoreArr[i]))
  }
  return arr
}

function getStats () {
  const result = []
  const names = getPadawanNames()
  const score = getLightsaberScores()
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], Number(score[i])])
  }
  return result
}

function writeStats () {
  const stats = getStats()
  const arr = []
  for (let i=0; i< stats.length; i++) {
    arr.push(stats[i].join(' '))
  }
  fs.writeFileSync('data/stats.txt', arr.join(`\n`))
  return arr
}

 writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats
};
