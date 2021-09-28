const fs = require('fs');
const padawans = fs.readFileSync("./data/padawans.txt", "utf-8");
const scores = fs.readFileSync("./data/scores.txt", "utf-8")
function getPadawanNames() {
  return padawans.trim().split("\n");
}
function getLightsaberScores() {
  return scores.trim().split("\n").map((el)=>+el)
 }


 function getStats() {
  let result = [];
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  for (let i = 0; i < names.length; i++) {
    result.push([names[i],scores[i]])
    
  }
  return result
}


function writeStats(){
  let stats = getStats();
  let string = stats.join("\n")
  fs.writeFileSync("./data/stats.txt",string.replace(/,/g," "))
 
  
  
}
// reduce((accum, prev) => accum.concat(prev)).join("\n")

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
