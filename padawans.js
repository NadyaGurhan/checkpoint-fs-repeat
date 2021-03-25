const fs = require("fs");

let infoPadawans = fs.readFileSync("./data/padawans.txt", "utf-8");
let infoScore = fs.readFileSync("./data/scores.txt", "utf-8");

function getPadawanNames() {
  let result = infoPadawans.trim().split("\n");
  console.log(result);
  return result;
}

function getLightsaberScores() {
  let result = infoScore.split("\n").map((a) => Number(a));
  console.log(result);
  return result;
}

function getStats() {
  let result = getPadawanNames().map((a, b) => getLightsaberScores()[b]);
  console.log(result);
  return result;
}

function writeStats() {

  let result = getStats();

  console.log(result)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
