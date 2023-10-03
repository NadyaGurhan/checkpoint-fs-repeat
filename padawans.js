const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  return fs.readFileSync("./data/padawans.txt","utf8").split("\n");
}
// console.log(getPadawanNames());

function getLightsaberScores(){
  return fs.readFileSync("./data/scores.txt","utf8").split("\n").map(Number);
}
// console.log(getLightsaberScores())
function getStats(){
  let arr = []
  let padawans = fs.readFileSync("./data/padawans.txt","utf8").split("\n");
  let scores = fs.readFileSync("./data/scores.txt","utf8").split("\n").map(Number);
  for(i = 0; i < padawans.length; i++){
    arr.push([padawans[i],scores[i]]);
    
  }
  return arr;
}
// console.log(getStats())

function writeStats(){
  return fs.writeFileSync("data/stats.txt/",getStats(),"utf8")
}
writeStats();