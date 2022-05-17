const fs = require("fs")
function getPadawanNames() {
  let arr = fs.readFileSync('data/padawans.txt').toString().split('\n')
  return arr
}
console.log(getPadawanNames([]))


function getLightsaberScores() {
  let arr = fs.readFileSync('data/scores.txt').toString().split('\n')
  return arr
}
console.log(getLightsaberScores())


function getStats() {
  let arr = fs.readFileSync('data/padawans.txt').toString().split(',')
  let arr2 = fs.readFileSync('data/scores.txt').toString().split(',')

  let arr3 = [...new Set([...arr ,...arr2])];
console.log(arr3);

return arr3.join('\n')
}
console.log(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  //writeStats,
};
