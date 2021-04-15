const fs = require('fs')
function getPadawanNames () {
let names = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n')
return names
}

function getLightsaberScores () {
  let scores = fs.readFileSync('./data/scores.txt', 'utf8').toString().split('\n').map((el) => el = Number(el))
return scores
}

function getStats () {
  let names = getPadawanNames()
  let scores = getLightsaberScores() 
  let result = []
  for (let i = 0; i < names.length; i++) {
    let arr = []
    arr.push(names[i], scores[i])
    result.push(arr)
  }
  return result
}

function writeStats() {
  let data = getStats()
  fs.writeFileSync('./data/stats.txt', data.join('\n').replace(/,/g, ' '))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
