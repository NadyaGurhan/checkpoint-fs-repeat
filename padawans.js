const fs = require('fs');

// function getPadawanNames() {
let getPadawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(-1)
console.log(getPadawanNames)
// }
let getLightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
console.log(getLightsaberScores)

let getStats = []
let res = [];
let i = 0;
while (i < getPadawanNames.length) {
  res.push(getPadawanNames[i], getLightsaberScores[i])
  getStats.push(res)
  i++
}
console.log(getStats)



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
