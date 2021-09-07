const fs = require("fs");
function getPadawanNames() {
  let padawans = fs.readFileSync("./data/padawans.txt", "utf8")
  let padawansArr = padawans.split("\n").slice(0, -1)
  
  
  return padawansArr
}
getPadawanNames()

function getLightsaberScores(){
  let padawansScores = fs.readFileSync("./data/scores.txt", "utf8")
  let padawansArr = padawansScores.split("\n").slice(0).map(Number)
  
  
  
  return padawansArr
}
getLightsaberScores()

function getStats() {
  let padawans = fs.readFileSync("./data/padawans.txt", "utf8")
  let padawansArr = padawans.split("\n").slice(0, -1)

  let padawansScores = fs.readFileSync("./data/scores.txt", "utf8")
  let padawansArrScores = padawansScores.split("\n").slice(0).map(Number)
  // console.log(padawansArr)
  // console.log(padawansArrScores)

  let arr = [];
  let scoreArr = []
  for (let i = 0; i < padawansArr.length; i++){
    let padawnsome = padawansArr[i].split(",")
    arr.push(padawnsome)
    
    
  }
  for (let i = 0; i < padawansArrScores.length; i++) {
    let scoresome = padawansArrScores[i].split(",")
    scoreArr.push(scoresome)
  }
 console.log(arr)
 console.log(scoreArr)
}
getStats()

function writeStats(){

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
