const fs = require("fs");

function getPadawanNames() {
  const padawan = "/Users/neugadal/elbrus/checkpoint-fs/data/padawans.txt";
  return fs.readFileSync(padawan, "utf8").split("\n").slice(0,4);
}

function getLightsaberScores() {
  const scores = "/Users/neugadal/elbrus/checkpoint-fs/data/scores.txt";
  return fs.readFileSync(scores, "utf8").split("\n").map(Number);
}

function getStats() {
  let arr1 = getPadawanNames();
  let arr2 = getLightsaberScores();
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // arr1[i]+arr2[j];
    }
    
  }
}
function writeStats() {
  
}

console.log(getPadawanNames());
console.log(getLightsaberScores());
console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
