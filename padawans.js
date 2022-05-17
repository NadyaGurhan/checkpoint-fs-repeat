const fs = require('fs');
// './data/padawans.txt'
//'phase 1/checkpoint-fs/data/padawans.txt'
const allPadawans = fs.readFileSync('phase 1/checkpoint-fs/data/padawans.txt', 'utf8').split('\n')
// './data/scores.txt'
// 'phase 1/checkpoint-fs/data/scores.txt'
const allScores = fs.readFileSync('phase 1/checkpoint-fs/data/scores.txt', 'utf8').split('\n')


function getPadawanNames () {
  return allPadawans.slice(0, allPadawans.length-1)
}


function getLightsaberScores() {
  let scoresNums = []  
  for (let i=0; i < allScores.length; i++) {
    scoresNums.push(Number(allScores[i]))
  }
return scoresNums
}

function getStats () {
  const result1 =[]
  const result2 = []
  const scores = getLightsaberScores() 
  const names = getPadawanNames ()
//   let y = 0
//   for (let i = 0; i < scores.length; i++) {
//       result1.push(scores[i], (names[y]))
//       y++
//   }
//  return result1
// for (let y = 0; y < names.length; y ++) {
// let result3 =  scores.map(el => el.push(names[y]))
// return result3
}

  



console.log(getStats () )

function writeStats () {
  fs.writeFileSync('./data/stats.txt', `${getStats()}`)
}



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
