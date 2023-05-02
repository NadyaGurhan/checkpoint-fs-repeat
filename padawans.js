const fs = require('fs')

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n')
const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map(el => Number(el))
// console.log(padawans)
// console.log(scores)

function getPadawanNames() {
  return padawans
}

function getLightsaberScores() {
  return scores
}

function getStats() {
  let arr = []
  for (i = 0; i < padawans.length; i++) {
    arr.push([padawans[i], scores[i]])
  }
  return arr
}
// console.log(getStats())

function writeStats() {
  const stats = getStats().map(el => el.join(' ')).join('\n')
  return fs.writeFileSync('./data/stats.txt', stats, 'utf8')
}
console.log(writeStats())





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
