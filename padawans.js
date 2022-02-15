const fs = require('fs')
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8')
const scores = fs.readFileSync('./data/scores.txt', 'utf-8')

function getPadawanNames() {
  let result = padawans.split('\n')
  result.pop()
  return result
}

function getLightsaberScores() {
  return scores.split('\n').map(el => +el)
}

function getStats() {
  let pads = getPadawanNames()
  let sabs = getLightsaberScores()
  let res = []

  pads.forEach((el1, ind1) => {
    sabs.forEach((el2, ind2) => {
      if (ind1 === ind2) res.push([el1, +el2])
    })
  })

  return res
}

function writeStats() {
  let arr = getStats().map(el => el = el[0] + ' ' + el[1] + '\n')
  let str = arr.join('')
  let res = str.slice(0, str.length - 1)

  fs.writeFileSync('./data/stats.txt', res)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
