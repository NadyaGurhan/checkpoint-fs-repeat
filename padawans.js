const fs = require('fs');
const fileName = "./data/padawans.txt"
const fileScore = "./data/scores.txt"
const dataName = fs.readFileSync(fileName, "utf8")
const dataScore = fs.readFileSync(fileScore, "utf8")


function getPadawanNames(filename) {
  let arr = dataName.split("\n").slice(0);
  arr.pop()
  arrNames= arr
  return arrNames
}

function getLightsaberScores(fileScore) {
  let arr = dataScore.split("\n").slice(0);
  arrScores = arr.map((el) => +el)
  return arrScores
}

function getStats(arrNames, arrScores) {
arrNames.map((el) => el.push(arrScores))
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,git
};
