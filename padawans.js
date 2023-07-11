const { isUtf8 } = require('buffer');
const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames () {
  const zero = ""
  const result = []
  let string = fs.readFileSync('./data/padawans.txt', { encoding: 'utf8'})
  result.push(string.split('\n'))
  const resultFilter = result.filter((string) => string !== zero)
  return resultFilter
}
function getLightsaberScores () {
  const result = []
  let string = fs.readFileSync('./data/scores.txt', { encoding: 'utf8'})
  let num = string.split('\n')
  result.push(Number(num))
  // for (let i=0; i<result.length; i+=1) {
  //   +result[i]
  // }
  // let num = Number(string.split('\n'))
  return result
}
function getStats () {
  
}
function writeStats () {
  
}