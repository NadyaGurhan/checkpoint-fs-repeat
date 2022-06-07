module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const fs = require("fs");
function getPadawanNames() {
  const padavanNames = fs
    .readFileSync("data/padawans.txt", "utf-8")
    .trim()
    .split("\n");
  return padavanNames;
}
const arr1 = getPadawanNames();

function getLightsaberScores() {
  const scores = fs
    .readFileSync("data/scores.txt", "utf-8")
    .trim()
    .split("\n")
    .map((el) => +el);
  return scores;
}
const arr2 = getLightsaberScores();

function getStats() {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push([arr1[i], arr2[i]]);
  }
  return arr;
}

function writeStats() {}
