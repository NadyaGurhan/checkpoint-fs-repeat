const fs = require('fs')

let padawans = fs.readFileSync('./data/padawans.txt','utf8')

let scores = fs.readFileSync('./data/scores.txt','utf8')

function getPadawanNames() {
  return padawans.trim().split('\n')
}

function getLightsaberScores() {
  const scr = scores.trim().split('\n')
  const result = []
  scr.forEach(el => result.push(+el))
  return result
}

function getStats() {
  let arrOfNames = getPadawanNames()
  let arrOfScroes = getLightsaberScores()
  let result = []
  for (let i = 0; i < 4; i++) {
    let arr = []
    arr.push(arrOfNames[i])
    arr.push(arrOfScroes[i])
    result.push(arr)
  }
  return result
}

function writeStats() {
  let arrOfStats = getStats()
  for (let i = 0; i < 4; i++){
    let str =  arrOfStats[i].join(' ')
    if(i == 3) {
      fs.appendFileSync(`./data/stats.txt`,`${str}`)
    } else {
      fs.appendFileSync(`./data/stats.txt`,`${str}\n`)
    }
  }
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
