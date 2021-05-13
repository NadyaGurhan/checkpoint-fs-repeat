  const fs = require('fs')
 let data = fs.readFileSync('./data/padawans.txt', 'utf8')
//console.log(data);
 let score = fs.readFileSync('./data/scores.txt', 'utf8')
//console.log(score.split('\n'));

function getPadawanNames(data) {
  let arr = data.split('\n')
  arr.pop()
  return arr
}
function getLightsaberScores(score) {
 return score.split('\n').map((el) => +el)
  
}

function getStats() {
  return getPadawanNames().map((el, i) => el + getLightsaberScores()[i])
}

function writeStats() {

}
console.log(getPadawanNames(data));
//module.exports = {
//   getPadawanNames
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };
