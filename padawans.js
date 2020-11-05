function getPadawanNames() {
  const fs = require('fs')
  let data = fs.readFileSync('data/padawans.txt', 'utf-8')
  return data.trim().split('\n')
}

function getLightsaberScores() {
  const fs = require('fs')
  let data = fs.readFileSync('data/scores.txt', 'utf-8')
  return data.trim().split('\n').map(a => +a)
}

function getStats() {
  const arr1 = getPadawanNames()
  const arr2 = getLightsaberScores()
  const arr3 = []
  for (let i = 0; i < arr1.length; i++) {
    arr3.push([arr1[i], arr2[i]])
  }
  return arr3
}

function writeStats() {
  const fs = require('fs')
  let stats = getStats()
  let str = ''
  stats.forEach(a => str += `${a[0]} ${a[1]}\n`)
  fs.writeFileSync('data/stats.txt', str.slice(0, str.length - 1))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
}
