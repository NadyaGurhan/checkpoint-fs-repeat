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
  let parse = string.split('\n')
  for (let i =0; i<parse.length; i++) {
    if (parse[i]!="") {
      result.push(parse[i])
    }
  }
  return result
}
function getLightsaberScores () {
  const result = []
  let string = fs.readFileSync('./data/scores.txt', { encoding: 'utf8'})
  let num = string.split('\n')
  for (let i =0; i<num.length; i++) {
    result.push(+num[i])
  }
  return result
}
function getStats () {
  
}
function writeStats () {
  
}