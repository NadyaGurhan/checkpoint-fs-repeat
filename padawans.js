const fs = require("fs");

function getPadawanNames() {
  const arr = [];
  const result = fs.readFileSync("data/padawans.txt", "utf8");
  const names = result.trim().split("\n");
  return names;
}
function getLightsaberScores() {
  let arr = [];
  const e = fs.readFileSync("data/scores.txt", "utf8");
  arr.push(e);
  return arr
    .join()
    .split("\n")
    .map((el) => +el);
}

function getStats() {
  // const arr1 = fs.readFileSync("data/padawans.txt", "utf8");
  // const arr2 = fs.readFileSync("data/scores.txt", "utf8");
  const arr1 = getPadawanNames();
  const arr2 = getLightsaberScores();
  const result = arr1.map((el, i) => [el, arr2[i]]);
  return result;
}

function writeStats() {
  const join = getStats()
  const res = fs.writeFileSync("data/stats.txt", join.join('\n').replace(/,/g, ' '));
  return res;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
