const fs = require('fs')
function getPadawanNames(){
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
return padawan

}
function getLightsaberScores(){
  let arr = []
  const sword = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  for(let i = 0; i < sword.length; i++){
   arr.push(Number(sword[i]))
  }
  return arr
  }

function getStats(){
const fs1 = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n')
const fs2 = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')

}

function writeStats(){

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
