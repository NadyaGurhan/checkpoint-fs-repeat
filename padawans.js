const { log } = require('console');
const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

function getPadawanNames() {
 const namesArr = fs.readFileSync("./data/padawans.txt", "utf8");
return namesArr.split('\n')
}

console.log(getPadawanNames())

function getLightsaberScores() {
  const score = fs.readFileSync("./data/scores.txt", 'utf8')
  return score.split('\n').map(Number)
}

console.log(getLightsaberScores())

function getStats() {
  namesArr = getPadawanNames()
  score = getLightsaberScores()
  const newArr = []
  for (let i = 0; i < namesArr.length; i++) {
 newArr.push([namesArr[i], score[i]])   
  }
  return newArr
}

console.log(getStats())

// function writeStats() {
//   const getStats = getStats().join('\n')
//   let stats = fs.appendFileSync('./data/stats.txt', getStats, 'utf8');
// return stats
// }

// console.log(writeStats())