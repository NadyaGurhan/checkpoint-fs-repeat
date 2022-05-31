const fs = require('fs');

function getPadawanNames() {
  const arr = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
  return arr
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
  const arrPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n').filter(el => el)
  let res = []
  for (let i = 0; i < arrPadawans.length; i++) {
    res.push([arrPadawans[i], +arrScore[i]])
  }
  return res
}
console.log(getStats());


function writeStats() {
  let file = fs.writeFileSync('./data/stats.txt', getStats())

  return file
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
