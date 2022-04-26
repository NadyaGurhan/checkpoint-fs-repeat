const fs = require("fs");
const data = fs.readFileSync("./data/padawans.txt", "utf8");
const padawans = data.split("\n")

const data1 = fs.readFileSync("./data/scores.txt", "utf8");
const scores = data1.split("\n")
let p1 = padawans.pop()
let p2 = scores.map(el => +el)
 console.log(padawans);
 console.log(scores);
 console.log(p2);



function getPadawanNames () {
  return padawans
}
 

function getLightsaberScores () {
  
  return p2
}
 
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
