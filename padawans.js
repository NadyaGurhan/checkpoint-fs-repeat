const fs = require('fs')

function getPadawanNames() {

const readFile = fs.readFileSync('./data/padawans.txt', 'utf8').toString()
console.log(readFile)
const getPad = readFile.split('\n')
getPad.pop()
return getPad
}

const getPadName = getPadawanNames()

function getLightsaberScores(){

  const readScores = fs.readFileSync('./data/scores.txt', 'utf8').toString()
  console.log(readScores)
  const getScores = readScores.split('\n')
  const scoresToNum = getScores.map(el => +el)
  return scoresToNum

}
const getScoreName = getLightsaberScores()

function getStats(){

// const readFile = fs.readFileSync('./data/padawans.txt', 'utf8').toString()
// const readScores = fs.readFileSync('./data/scores.txt', 'utf8').toString()

for (let i = 0; i < getPadName.length; i++) {
getPadName[i].concat(getScoreName[i])
}
console.log(newArr)


// let newArr = []
// for (let i = 0; i < getPadName; i++) {
//   newArr.push(i)
//   for (let j = 0; j < getScoreName; j++) {
//     newArr.push(j)
//   }
  
// }


}
getStats()

function writeStats(){

}
writeStats()


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

