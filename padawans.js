const fs = require("fs")

function  getPadawanNames() {
const text = fs.readFileSync("./data/padawans.txt","utf8")
let arr = text.trim().split("\n")
return arr;
}

function getLightsaberScores() {
  const scores = fs.readFileSync("./data/scores.txt","utf8")
  let arr = scores.trim().split("\n").map(Number)
  // for(let i = 0;i<arr.length;i++) {
  //   arr[i] = arr[i] * 1
  // }
  return arr;
}

function getStats() {
  const text = getPadawanNames()
  const scores = getLightsaberScores()
  let arrT = text.trim().split("\n")
  let arrN = scores.trim().split("\n").map(Number)
  let arrO = []
  for(let i = 0;i<arrT.length;i++) {
    
  }
}

function writeStats() {

}





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
