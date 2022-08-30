const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

function getPadawanNames() {
  let filePad = fs.readFileSync('./data/padawans.txt', "utf8");
  let arr = filePad.split('\n');
  return arr.slice(0, 4);
}
console.log(getPadawanNames());

function getLightsaberScores() {
  let fileScores = fs.readFileSync('./data/scores.txt', "utf8");
  let arr = fileScores.split('\n');

  return arr.slice(0, 4).map((string => parseFloat(string)));
}

console.log(getLightsaberScores())

function getStats() {
  arr = getPadawanNames().map(el => el)
  arr2 = getLightsaberScores().map(el => el)
  
  return arr2
}

console.log(getStats())