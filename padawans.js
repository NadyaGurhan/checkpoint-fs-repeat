const { resolveSoa } = require('dns');
const fs = require('fs');

function getPadawanNames() {
  const arr = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(getPadawanNames());


function getLightsaberScores() {
  const arr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Number(arr[i]))
  }
  return newArr
}
console.log(getLightsaberScores());

function getStats() {
  const arrScore = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  const arrPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').filter(el => el)
  let res = []
  for (let i = 0; i < arrPadawans.length; i++) {
    res.push([arrPadawans[i], +arrScore[i]])
  }
  return res
}
console.log(getStats());

function writeStats() {

}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
