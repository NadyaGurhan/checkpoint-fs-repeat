const fs = require('fs')

function getPadawanNames () {
let filePath = './data/padawans.txt'
let padawansList = fs.readFileSync(filePath, 'utf-8').split('\n').slice(0, 4)
return padawansList

}
getPadawanNames()


function getPadawanScores () {
  let fileScoresPath = './data/scores.txt'
  let padawansScores = fs.readFileSync(fileScoresPath, 'utf-8').split('\n')

  return padawansScores.map(el => el / 1);

}
getPadawanScores()

function getStats () {
  let arr = [];
  let filePath = './data/padawans.txt'
  let padawansList = fs.readFileSync(filePath, 'utf-8').split('\n').slice(0, 4)
  let fileScoresPath = './data/scores.txt'
  let padawansScores = fs.readFileSync(fileScoresPath, 'utf-8').split('\n')

  for (let i = 0; i < padawansList.length; i += 1) {
    arr.push([padawansList[i], padawansScores[i]])
    
  }
 return arr;


}
getStats()


function writeStats () {

}
writeStats()

module.exports = {
  getPadawanNames,
  getPadawanScores,
  getStats,
  writeStats,
};
