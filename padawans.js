const fs = require("fs");
const padawans = fs.readFileSync("data/padawans.txt", "utf8");
const scores = fs.readFileSync("data/scores.txt", "utf8");
// const names = getLightsaberScores()
// const stats = getStats()
function getPadawanNames(names) {
  return names.split("\n");
}
// console.log(getPadawanNames(padawans));
function getLightsaberScores(score) {
  return score.split("\n");
}
// console.log(getLightsaberScores(scores));

function getStats(arr1, arr2) {
  const arr3 = [];
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    if (arr1[i] && arr2[i]) {
      arr3.push([`${arr1[i]}, ${arr2[i]}`]);
    }
  }
  return arr3;
}
// console.log(getStats(getPadawanNames(padawans),getLightsaberScores(scores)))

function writeStats(arr, path) {
  for (let i = 0; i < arr.length; i++) {
    fs.appendFileSync(path, `${arr[i]}\n`);
  }
}
const stats = getStats(getPadawanNames(padawans), getLightsaberScores(scores));
writeStats(stats, "data/stats.txt");


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
