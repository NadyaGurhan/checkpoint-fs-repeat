const fs = require('fs');
const { log } = require('util');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {

  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n')
}
// console.log(getPadawanNames())

function getLightsaberScores() {
return fs.readFileSync('./data/scores.txt', 'utf-8').split('\r\n').map(el => Number(el))

}
// console.log(getLightsaberScores())
function getStats() {
const pad = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n')
const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\r\n').map(el => Number(el))
const newArr = pad.concat(score)
console.log(newArr)
const newArr2 = [[newArr[0], newArr[4]],[newArr[1], newArr[5]], [newArr[2], newArr[6]], [newArr[3], newArr[7]]]
  return newArr2
}
// console.log(getStats());

function writeStats() {

}