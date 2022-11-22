const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


const getPadawanNames() {
let arr = []
let padawansNames = fs.readFileSync('data/padawans.txt','utf-8')
arr.push[padawansNames]
}

const getLightsaberScores() {
let arr = []
let saberScore = fs.readFileSync('data/scores.txt','utf-8')
arr.push[saberScore]
}


const getStats() {}


const writeStats() {
fs.appendFileSync('data/stats.txt',`${getStats().join('\n')}`,'utf8')
}