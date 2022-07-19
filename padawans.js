const fs = require('fs')
// const padNames = fs.readFileSync('checkpoint-fs/data/padawans.txt', 'utf-8')
// const scores = fs.readFileSync('/checkpoint-fs/data/scores.txt', 'utf-8')

function getPadawanNames () {
  const padNames = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let res = []
  let resx = []
  res.push(padNames.split('\n'))
  for(let i = 0; i < res.length; i++){
    let resOne = res[i].join()
    resx.push(resOne)
    console.log(resx)
  }
  
  
  return resX
}
console.log(getPadawanNames())

// function getLightsaberScores () {
//   const scores = fs.readFileSync('./data/scores.txt', 'utf-8')
//   console.log(scores)
//   let res = []
//   res.push(scores)
//   return res
// }
// console.log(getLightsaberScores)

// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };
