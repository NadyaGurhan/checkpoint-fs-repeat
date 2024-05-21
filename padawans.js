const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync("./data/padawans.txt", "utf8");
  const namesArr = names.split("\r\n"); // \r\n
  return namesArr;
}

console.log (getPadawanNames())

function getLightsaberScores() {
  const scores  = fs.readFileSync("./data/scores.txt", "utf8");
  const scoresArr = scores.split("\r\n");
  return scoresArr;
}


console.log (getLightsaberScores())


function getStats() {
  const names = fs.readFileSync("./data/padawans.txt", "utf8");
  const scores  = fs.readFileSync("./data/scores.txt", "utf8");
  const namesArr = names.split("\r\n");
  const scoresArr = scores.split("\r\n");
  let stats = [];
  for (let i= 0; i< namesArr.length-1; i++) {
    
    stats.push(namesArr[i],scoresArr[i]);
     
  }
  return stats
}

console.log (getStats())
