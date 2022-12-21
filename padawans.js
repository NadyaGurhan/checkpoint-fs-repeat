const fs = require("fs");

function getPadawanNames() {
  let padawans = fs.readFileSync(__dirname + "/data/padawans.txt", "utf8");
  let fixedPadawans = padawans.split("\n");
  return fixedPadawans;
}

// console.log(getPadawanNames());

function getLightsaberScores() {
  let scores = fs.readFileSync(__dirname + "/data/scores.txt", "utf8");
  let fixedScore = scores.split("\n");
  return fixedScore.map((item) => +item);
}
// console.log(getLightsaberScores());

function getStats() {
  let arr = getPadawanNames();
  let arr1 = getLightsaberScores();
  let combArr = [];

  for (let i = 0; i < arr.length; i++) {
    combArr.push([arr[i], arr1[i]]);
  }

  return combArr;
}

// console.log(getStats());

function writeStats() {
  let newArr = getStats();
  // let fixedItem = [];
  // for (let i = 0; i < newArr.length; i++) {
  //   let result = newArr[i].join(" ");
  //   fixedItem.push(result);
  // }
  let fixedItem = newArr.map((item) => item.join(" "));
  let data = fixedItem.join("\n");
  let statisticFile = fs.writeFileSync(`./data/stats.txt`, data);
  return statisticFile;
}

console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
