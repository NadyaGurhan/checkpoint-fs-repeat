 const fs = require('fs')
 const names = './data/padawans.txt'
 const namesOfPad = fs.readFileSync(names, 'utf-8')
 
 function getPadawanNames() {
  newName = namesOfPad.split('\n')
  let newArr = []
  for (let i = 0; i < 4; i += 1){
    newArr.push(newName[i])
  }
  return newArr
 }

console.log(getPadawanNames)

const skill = './data/scores.txt'
const skillLvl = fs.readFileSync(skill, 'utf-8')

function getLightsaberScores() {
  newSkill = skillLvl.split('\n')
  let newArr1 = []
  for (let i = 0; i < 4; i += 1){
    newArr1.push(Number(newSkill[i]))
}
return newArr1
}

function getStats(){
  const padNames = (getPadawanNames())
  const score = (getLightsaberScores())
  let newArr2 = []
  for(let i = 0; i < 4; i +=1){
    newArr2.push([padNames[i], score[i]])

    }
  return newArr2
}


function writeStats(){
  fs.appendFileSync('./data/stats.txt', getStats())
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
