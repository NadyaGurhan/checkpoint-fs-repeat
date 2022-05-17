const fs = require('fs')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
};
function getPadawanNames() {
  const arrNames = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n')
  return arrNames
}
console.log(getPadawanNames())

function getLightsaberScores() {
  const arrScores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n')
  return arrScores
}
console.log(getLightsaberScores())

function getLightsaberScores() {
  const arrScores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n')
  return arrScores
}
console.log(getLightsaberScores())



