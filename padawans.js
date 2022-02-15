const { resolveNaptr } = require('dns')
const fs = require('fs')
const { resourceLimits } = require('worker_threads')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
const padList = fs.readFileSync('./data/padawans.txt', 'utf-8')
function getPadawanNames(){
return  padList.split('\n')
.slice(0, -1)
}
//console.log(getPadawanNames())


const lightWord = fs.readFileSync('./data/scores.txt', 'utf-8')
function getLightsaberScores(){
  return lightWord.split('\n')
  .map((el)=> el*1) 
}
console.log(getLightsaberScores())

// let padawans = getPadawanNames()
// let swords = getLightsaberScores()

// let myArr = [];
// myArr.concat(padawans)
// console.log(myArr);

