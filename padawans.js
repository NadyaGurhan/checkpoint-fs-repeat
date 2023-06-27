const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames () {
  return fs.readFileSync('./data/padawans.txt','utf8').split('\n').slice(0,4)
}
console.log(getPadawanNames())

function getLightsaberScores () {
  let a =  fs.readFileSync('./data/scores.txt','utf8').split('\n')
  return a.map((elem) => parseFloat(elem) )
}
console.log(getLightsaberScores())



function getStats () {
  let result = []
  let fio = fs.readFileSync('./data/padawans.txt','utf8').split('\n').slice(0,4)
  let score = fs.readFileSync('./data/scores.txt','utf8').split('\n')
  let floatScore = score.map((elem) => parseFloat(elem) )
  result = fio.map((name,number) => [name,floatScore[number]])
  return result
}
console.log(getStats ())

function writeStats () {
  let data =  getStats().join('\n')
  const b = fs.writeFileSync('./data/stats.txt', data)
  return b
}