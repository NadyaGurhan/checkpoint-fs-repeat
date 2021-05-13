const fs = require('fs')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1)
}

//console.log(getPadawanNames())

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => (+el))
}

//console.log(getLightsaberScores())

function getStats() {
  let a = getPadawanNames()
  let b = getLightsaberScores()
  let arr = []
  for (let i = 0; i < a.length; i++) {
    console.log(a[i])
  }
  // for (let j = 0; l < b.length; j++) {
  //   return b[j]
  arr.push()
}

function writeStats() {

}
