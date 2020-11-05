const fs = require('fs');
let padawans = "./data/padawans.txt"


// let reader1 = fs.readFileSync("./data/padawans.txt", "UTF-8")
// console.log(reader1);
// let reader2 = fs.readFileSync("./data/scores.txt", "UTF-8")
// console.log(reader2);

function getPadawanNames(fileName) {
  let reader1 = fs.readFileSync(fileName, "UTF-8").trim()
  console.log(reader1.split("\n"))
  return reader1.split("\n")
} 
let names = getPadawanNames("./data/padawans.txt")

function getLightsaberScores(fileName) {
  let reader2 = fs.readFileSync(fileName, "UTF-8").trim().split("\n")
  let scores = reader2.map(el => el * 1)
  return scores
}
let stats = getLightsaberScores("./data/scores.txt")

function getStats(names, stats){
  let a = 0
  let b = 0
  let arrRes = [a,b]
  for (let i = 0; i < names.length; i++) {
    a += names[i]
    b += stats[i] 
    arrRes.push([a,b])
  } return arrRes
} console.log(getStats(names, stats));




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
