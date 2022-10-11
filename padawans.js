const fs = require('fs')

const padNames = fs.readFileSync('./data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8')

function getPadawanNames() {
  const names = padNames.split('\n')
  names.pop()
  return names
}

function getLightsaberScores() {
  const score = scores.split('\n').map(el => +el)

  return score
}

function getStats() {
  const arr = Array.from( {length: 4}, () => [])
  const namess = padNames.split('\n')
  namess.pop()
  const scoress = scores.split('\n').map(el => +el)
  for (let i = 0; i < namess.length; i++) {
    arr[i].push(namess[i], scoress[i])
  }
  return arr
}

function writeStats() {
  fs.writeFileSync('')

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
