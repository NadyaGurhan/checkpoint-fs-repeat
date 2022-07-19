const fs = require('fs')
// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };
let padawans = fs.readFileSync("data/padawans.txt", "utf8").toString().split("\n");
function getPadawansNames () {
  for (let i = 0; i <padawans.length; i++) {
    if (padawans[i] === "") {
      delete padawans[i]
    }
  }
  return padawans
}
console.log(getPadawansNames())

let score = fs.readFileSync('data/scores.txt').toString().split("\n");

function getLightsaberScores () {
  return score
}
console.log(getLightsaberScores())

function getStats() {
  let result = [];
  for (let i = 0; i < padawans.length; i++) {
    result.push(padawans[i], score[i])
  }
  return result;
}
console.log(getStats())