const fs = require('fs')

function getPadawanNames () {
  let a = fs.readFileSync('data/padawans.txt', 'utf-8')
  let b = a.split('\n')
  return b.filter(el => el !== '')
}
// console.log(getPadawanNames())

function getLightsaberScores () {
  let a = fs.readFileSync('data/scores.txt', 'utf-8')
  let b = a.split('\n')
  return b.map(el => Number(el))
}
// console.log(getLightsaberScores())


class getStats {
  constructor(getPadawanNames, getLightsaberScores) {

  }
}
console.log(getStats())

// function writeStats {
  
// }
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
