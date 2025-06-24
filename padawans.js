const fs = require('fs')

function getPadawanNames () {
  const str = fs.readFileSync('./data/padawans.txt', 'utf-8')
  const arrGetPadawanNames = str.trim().split('\n')
  console.log(str);
  return arrGetPadawanNames
}
getPadawanNames()

function getLightsaberScores () {
  const numF = fs.readFileSync('./data/scores.txt', 'utf-8')
  const newNum = numF.split(',').map(i => parseFloat(i.trim()))
  return newNum
  console.log(newNum)
}
getLightsaberScores()


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
