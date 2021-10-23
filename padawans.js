/* eslint-disable */
const fs = require("fs")


function getPadawanNames() {
  const padawanFile = fs.readFileSync("./data/padawans.txt", "utf8")
  /* 1-й способ */
  let padawanList = padawanFile.split('\n')
  padawanList.pop()

  /* 2-й способ */
  //let padawanList = padawanFile.trim().split('\n')

  return padawanList
}

function getLightsaberScores() {
  const saberFile = fs.readFileSync("./data/scores.txt", "utf8")
  //console.log(saberFile)
  const saberScoreStr = saberFile.split('\n')
  let saberScore = []

  for (score of saberScoreStr) {
    let num = +score
    saberScore.push(num)
  }
  //console.log(saberScore)
  return saberScore
}

function getStats() {
  const padawanFile = fs.readFileSync("./data/padawans.txt", "utf8")
  const saberFile = fs.readFileSync("./data/scores.txt", "utf8")

  let padawanList = padawanFile.split('\n')
  padawanList.pop()

  const saberScoreStr = saberFile.split('\n')
  let saberScore = []

  for (score of saberScoreStr) {
    let num = +score
    saberScore.push(num)
  }

  let result = []
  for (let i = 0; i < padawanList.length; i++) {
    let temp = []
    temp.push(padawanList[i])
    temp.push(saberScore[i])
    result.push(temp)
  }

  //console.log(result)
  return result
}

function writeStats() {
  const padawanFile = fs.readFileSync("./data/padawans.txt", "utf8")
  const saberFile = fs.readFileSync("./data/scores.txt", "utf8")

  let padawanList = padawanFile.split('\n')  //.trim() - удаляет пустые строки
  padawanList.pop()

  let saberScoreList= saberFile.split('\n')
 
  let statsStr = ''
  for (let i = 0; i < padawanList.length; i++) {
    let temp = padawanList[i] + ' ' + saberScoreList[i] + '\n'
    statsStr += temp
  }
  const stats = statsStr.slice(0, statsStr.length - 1)
  //console.log(stats);
  fs.writeFileSync('./data/stats.txt', stats)
  //проще: fs.writeFileSync('./data/stats.txt', statsStr)
}


 module.exports = {
   getPadawanNames,
   getLightsaberScores,
   getStats,
   writeStats,
 };

//getPadawanNames()
//getLightsaberScores()
//getStats()
//writeStats()
