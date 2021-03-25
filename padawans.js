const fs = require('fs')

function getPadawanNames () {
  let a = fs.readFileSync('data/padawans.txt', 'utf-8')
  let b = a.split('\n')
  return b.filter(el => el !== '')
}
// console.log(getPadawanNames())

function getLightsaberScores () {
  let a = fs.readFileSync('data/scores.txt', 'utf-8')
  let b = a.split('\n')
  return b.map(el => Number(el))
}
// console.log(getLightsaberScores())


function getStats (){
  let n1 = getLightsaberScores();
  let n2 = getPadawanNames();
  let result = [];
  for (let i = 0; i<4; i++) {
    let newArr = [];
    newArr.push(n2[i], n1[i])
    result.push(newArr)
  }
  return result
}

function writeStats() {
  fs.mkdir('data')
}

// console.log(getStats())

// function writeStats {
  
// }
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
