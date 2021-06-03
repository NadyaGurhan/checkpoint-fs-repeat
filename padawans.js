const fs = require("fs");
let filePath = 'data/padawans.txt'
let filePath2 = 'data/scores.txt'

function getPadawanNames() {
  const strLong = fs.readFileSync(filePath, "utf-8")
  return strLong.substring(0, strLong.length - 1).split("\n");

}

function getLightsaberScores() {
  const strLong = fs.readFileSync(filePath2, "utf-8")
  return strLong.split("\n").map(el => (+el));
}

function getStats() {
  let arr1 = getPadawanNames()
  let arr2 = getLightsaberScores()
  let arr3 = arr1.map((el, i) => ([el, arr2[i]]));
  return arr3;

}


function writeStats() {
  let arr = getStats().join("\n")
  let result = ''
  result = arr.replace(/,/g, " ")
  console.log(result);
  fs.writeFileSync("data/stats.txt", result);
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
