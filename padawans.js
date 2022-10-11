const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  let padawanslist = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let newPadawansList = padawanslist.split('\n')
  return newPadawansList.slice(0,4)
}

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8')
  let scoresList = scores.split('\n')
  for (let i = 0; i < 4; i++) {
    scoresList[i] = Number(scoresList[i])
  }
  return scoresList
}

function getStats() {
  let padawanslist = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let newPadawansList = padawanslist.split('\n')
  let finalList = newPadawansList.slice(0,4)

  let scores = fs.readFileSync('./data/scores.txt', 'utf-8')
  let scoresList = scores.split('\n')
  for (let i = 0; i < 4; i++) {
    scoresList[i] = Number(scoresList[i])
  }

 let padawan1 = []
 let padawan2 = []
 let padawan3 = []
 let padawan4 = []
let finalListPadawans = []
 padawan1.push(finalList[0])
 padawan1.push(scoresList[0])
 padawan2.push(finalList[1])
 padawan2.push(scoresList[1])
 padawan3.push(finalList[2])
 padawan3.push(scoresList[2])
 padawan4.push(finalList[3])
 padawan4.push(scoresList[3])
 finalListPadawans.push(padawan1)
 finalListPadawans.push(padawan2)
 finalListPadawans.push(padawan3)
 finalListPadawans.push(padawan4)
 // код заспамленный, можно было бы оптимизировать, но соображалки пока не хватает за короткое время придумать оптимизацию
return finalListPadawans
}

function writeStats() {
  let padawanslist = fs.readFileSync('./data/padawans.txt', 'utf-8')
  let newPadawansList = padawanslist.split('\n')
  let finalList = newPadawansList.slice(0,4)

  let scores = fs.readFileSync('./data/scores.txt', 'utf-8')
  let scoresList = scores.split('\n')
  for (let i = 0; i < 4; i++) {
    scoresList[i] = Number(scoresList[i])
  }

 let padawan1 = []
 let padawan2 = []
 let padawan3 = []
 let padawan4 = []
let finalListPadawans = []
 padawan1.push(finalList[0])
 padawan1.push(scoresList[0])
 padawan2.push(finalList[1])
 padawan2.push(scoresList[1])
 padawan3.push(finalList[2])
 padawan3.push(scoresList[2])
 padawan4.push(finalList[3])
 padawan4.push(scoresList[3])
 finalListPadawans.push(padawan1)
 finalListPadawans.push(padawan2)
 finalListPadawans.push(padawan3)
 finalListPadawans.push(padawan4)
  let lastChanse = fs.writeFileSync('./data/stats.txt', finalListPadawans.join('\n'))
}