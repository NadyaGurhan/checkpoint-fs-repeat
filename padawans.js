const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  const data1=fs.readFileSync('./data/padawans.txt', 'utf-8')
  console.log(data1)
  const names=data1.split('\n')
return names
console.log(names)
}
console.log(getPadawanNames())
function getLightsaberScores(){
  const data1=fs.readFileSync('./data/scores.txt','utf-8')
  const names=data1.split('\n')
return names
}
console.log(getLightsaberScores())

function getStats(){
const getPadawanNames=getPadawanNames()
const getLightsaberScores=getLightsaberScores()
const all=getPadawanNames.push(getLightsaberScores)
return all 
}
console.log(getStats())//тут неправильно я знаю))))

function writeStats(){
  fs.appendFileSync()

}
