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

let newArr = []

for (let i = 0; i < getScoreName.length; i++) {
newArr.push([getPadName[i], getScoreName[i]])
}
return newArr
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

