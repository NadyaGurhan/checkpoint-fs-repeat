/*eslint-disable*/

const fs = require('fs')

function getPadawanNames () {
  let file = fs.readFileSync('./data/padawans.txt', 'utf-8');
  let list = file.trim().split('\n')

  return list 
}


function getLightsaberScores () {
  let scoreFile = fs.readFileSync('./data/scores.txt', 'utf-8');
  scoreArrStr = scoreFile.split('\n')
  let scoreArr = []

  for (let i = 0; i < scoreArrStr.length; i++) {
    scoreArr.push(Number(scoreArrStr[i]))
  }
  return scoreArr
  // console.log(scoreArr)
}

function getStats () {
  let padawansFile = fs.readFileSync('./data/padawans.txt', 'utf-8');
  let padawansList = padawansFile.trim().split('\n')

  let scoreFile = fs.readFileSync('./data/scores.txt', 'utf-8');
  scoreArrStr = scoreFile.split('\n')
  let scoreArr = []

  for (let i = 0; i < scoreArrStr.length; i++) {
    scoreArr.push(Number(scoreArrStr[i]))
  }

  let jediArr = []
  
  for (let i = 0; i < padawansList.length; i++) {
    let tmp = []
    tmp.push(padawansList[i])
    tmp.push(scoreArr[i])
    jediArr.push(tmp)

  }
  return jediArr
}

function writeStats () {
  let padawansFile = fs.readFileSync('./data/padawans.txt', 'utf-8');
  let padawansList = padawansFile.trim().split('\n')
  
  let scoreFile = fs.readFileSync('./data/scores.txt', 'utf-8');
  scoreArrStr = scoreFile.split('\n')

  let resultStr = ''
  

  for (let i = 0; i < padawansList.length; i++) {
    let tmp = ''
    tmp = padawansList[i] + ' ' + scoreArrStr[i] + '\n'
    resultStr += tmp
  }
  let finalResult = fs.writeFileSync('./data/stats.txt', resultStr.trim())  /* Трим обрезает перенос строки */
  
  return finalResult
}








module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


