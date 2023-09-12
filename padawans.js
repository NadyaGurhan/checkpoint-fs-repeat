const fs = require('fs')

function getPadawanNames () {
  let arrName = []
  const dataName = fs.readFileSync("./data/padawans.txt", "utf8"); 
  arrName.push(dataName);
  // arr.split('\n');
  return arrName;
}

console.log(getPadawanNames ())

function getPadawanScores () {
  let arrScore = []
  const dataScore = fs.readFileSync("./data/scores.txt", "utf8"); 
  arrScore.push(dataScore);
  return arrScore;
}

console.log(getPadawanScores())

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
