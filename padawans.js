const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8')
  const padawans = padawan.split('\n')
  let arr = [];
  for (let i = 0; i < padawans.length - 1; i++) {
    arr.push(padawans[i].trim())
  }
  return arr

}
function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  let arrScore = []
  for (let i = 0; i < score.length; i++) {
    let num = Number(score[i])
    arrScore.push(num)

  }
  return arrScore
}

function getStats() {
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n')
  let resultArr = [];
  let inerArr = []
  for (let i = 0; i < score.length; i++) {
    
 
   
  }
return console.log(inerArr)
}
function writeStats() {

}