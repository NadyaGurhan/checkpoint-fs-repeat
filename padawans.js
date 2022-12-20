const fs = require("fs");

function getPadawanNames() {
  let padawans = fs.readFileSync(__dirname + "/data/padawans.txt", "utf8");
  let arr = padawans.split("\n");
  return arr;
}

// console.log(getPadawanNames());

function getLightsaberScores() {
  let scores = fs.readFileSync(__dirname + "/data/scores.txt", "utf8");
  let arr1 = scores.split("\n");
  return arr1.map((item) => +item);
}
// console.log(getLightsaberScores());

function getStats() {
  let padawans = fs.readFileSync(__dirname + "/data/padawans.txt", "utf8");
  let arr = padawans.split("\n");
  let scores = fs.readFileSync(__dirname + "/data/scores.txt", "utf8");
  let arr1 = scores.split("\n").map((item) => +item);
  let combArr = [];

      combArr = arr.concat(arr1);
  
  }
  return combArr;
}

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
