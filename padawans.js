const fs = require("fs");
const padawans = fs
  .readFileSync("data/padawans.txt", "utf8")
  .split("\n")
  .slice(0, 4);
const scores = fs
  .readFileSync("data/scores.txt", "utf8")
  .split("\n")
  .map((el) => Number(el));

function getPadawanNames() {
  const padawans = fs
    .readFileSync("data/padawans.txt", "utf8")
    .split("\n")
    .slice(0, 4);
  return padawans;
}

function getLightsaberScores() {
  const scores = fs
    .readFileSync("data/scores.txt", "utf8")
    .split("\n")
    .map((el) => Number(el));
  return scores;
}

function getStats() {
  let result = [];
  let arr0 = [];
  result.push(arr0)
  let arr1 = [];
  result.push(arr1)
  let arr2 = [];
  result.push(arr2)
  let arr3 = [];
  result.push(arr3)
  for (let i = 0; i < padawans.length; i++) {
    let arr`${i}` = [];
  }
}


// let arr = [];
// arr.push(padawans[0]);
// arr.push(scores[0]);
console.log(getStats());

function writeStats() {
  return fs.writeFileSync('.data/stats.txt', getStats(), 'utf8')
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
