const fs = require('fs')
const {EOL} = require('os')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  const padawans = fs.readFileSync('data/padawans.txt', 'utf-8').split(EOL).slice(0, 4);
  return padawans
}
console.log(getPadawanNames())


function getLightsaberScores(){
    const scores = fs.readFileSync('data/scores.txt', 'utf-8').split(EOL);
    const numScores = scores.map((el) => Number(el))
    return numScores
}

console.log(getLightsaberScores())

function getStats(){
  const padawans = fs.readFileSync('data/padawans.txt', 'utf-8').split(EOL).slice(0, 4);
  const scores = fs.readFileSync('data/scores.txt', 'utf-8').split(EOL);
  let result = []
  let res = []
  for(let i = 0; i < padawans.length; i++){
  // result.push(padawans[i])
  // result.push(scores[i])
  // res.push(result)
  }
  return padawans
}
console.log(getStats())

function writeStats(){

}