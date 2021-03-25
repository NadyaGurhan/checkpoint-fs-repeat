const fs = require('fs')


  function getPadawanNames() {
    const namesPadawan = fs.readFileSync('./data/padawans.txt', 'utf-8')
    let resArr = namesPadawan.split('\n')
    let popped = resArr.pop()
    return resArr
  }
  
  function getLightsaberScores() {
    const scores = fs.readFileSync('./data/scores.txt', 'utf-8')
    let arr = scores.split('\n')
    // let popped = arr.pop()
    return arr
    
  }

  function getStats() {

  }

  function writeStats(){

  }

console.log(getLightsaberScores())



module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
