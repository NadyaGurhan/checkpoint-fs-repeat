const fs = require('fs')


function getPadawanNames(){
  const padawanList = fs.readFileSync('data/padawans.txt', 'utf8').split('\n')
  let padawans = []
  for (let i = 0; i<padawanList.length; i++){
    if (padawanList[i]){
      padawans.push(padawanList[i])
    }
  }
  return padawans
}
let arr1 = getPadawanNames()
console.log(getPadawanNames())

function getLightsaberScores(){
  const swordsScores = fs.readFileSync('data/scores.txt', 'utf8')
  const freshData = swordsScores.split('\n')
  const lightSaberScore = Array.from(freshData)
  return lightSaberScore
}
let arr2 = getLightsaberScores()
console.log(getLightsaberScores())

// function getStats(arr1, arr2){
//   let stats = []
//   for (let i = 0; i<arr1.length; i++)
//     stats.push(arr1[i]+" "+arr2[i])
//     if (arr1[i]===undefined||arr2[i]===undefined){
//       stats.push('over9000')
//     }
//   return stats
// }
// console.log(getStats(arr1,arr2))

// let stats = writeStats(arr1,arr2)
// function writeStats(data, path){
//   fs.writeFileSync('./data/stats.txt', getStats())
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};


