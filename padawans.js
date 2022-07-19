const fs = require('fs')
const path = require('path')



function getPadawanNames() {
  const fileName = 'padawans.txt'
   const filePath = path.resolve(__dirname, './', 'data', fileName)
  const str = fs.readFileSync(filePath, 'utf-8');
   let arrStr = str.split('\n')
   arrStr.pop()
  return arrStr
}

function getLightsaberScores() {
  const fileName = 'scores.txt'
  const filePath = path.resolve(__dirname, './', 'data', fileName)
  const str = fs.readFileSync(filePath, 'utf-8');
  strScore = str.split('\n')
  strScore = strScore.map(item => Number(item))
  return strScore
}

console.log(getLightsaberScores())

function getStats() {
  const fileName = 'scores.txt'
  const filePath = path.resolve(__dirname, './', 'data', fileName)
  const str = fs.readFileSync(filePath, 'utf-8');

  let arrStr = str.split('\n')
  arrStr = arrStr.map(item => Number(item))

  const fileNamePad = 'padawans.txt'
   const filePathPad = path.resolve(__dirname, './', 'data', fileNamePad)
  const strPad = fs.readFileSync(filePathPad, 'utf-8'); 

  arrStrPad = strPad.split('\n')

  let scoreStat = [] 
  for (let i = 0; i<4; i++) {
    scoreStat.push([arrStrPad[i], arrStr[i]])
  }

  return scoreStat
}

function writeStats() {
  
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
