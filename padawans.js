const fs = require('fs')
const pada = fs.readFileSync('./data/padawans.txt', 'utf-8')
const score = fs.readFileSync('./data/scores.txt', 'utf-8')

function getPadawanNames(){
  newNamePad = pada.split('\n')
  let newPad = []
  for(let i = 0; i < 4; i += 1){
    newPad.push(newNamePad[i])
  }
  return newPad
}

function getLightsaberScores(){
  let newArrScore = []
  let newScore = score.split('\n')
  for(let i = 0; i < 4; i += 1){
    newArrScore.push(+newScore[i])
  }
  return newArrScore
}

function getStats(){
  let newArrPad = getPadawanNames()
  let newArrScre = getLightsaberScores()
  let skill = []
  for(let i = 0; i < 4; i += 1){
    skill.push([newArrPad[i], newArrScre[i]])
  }
  return skill
}

function writeStats(){
  let stat = getStats().join('\n')
  fs.appendFileSync('./data/stats.txt', stat, 'utf-8')
}

console.log(writeStats())
console.log(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
