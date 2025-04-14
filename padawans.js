const fs = require('fs')
const { EOL } = require('os')
// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };

const names = fs.readFileSync('./data/padawans.txt', 'utf-8')

function getPadawanNames () {
  let arrNames = names.split(EOL)
  return arrNames
}

const scores = fs.readFileSync('./data/scores.txt', 'utf-8')

function getLightsaberScores () {
    let arrScores = scores.split(EOL)
    return arrScores
}
// console.log(getLightsaberScores())

function getStats () {
  let total = []
  total.push(getPadawanNames())
  total.push(getLightsaberScores())
  return total
  //здесь необходим цикл, который я не успел рализовать
}
console.log(getStats())