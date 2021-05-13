const fs = require("fs");

function getPadawanNames() {
  const padawansStr = fs.readFileSync("./data/padawans.txt", "utf-8");
  const padawanArr = padawansStr.trim().split("\n");
  return padawanArr;
}

function getLightsaberScores() {
  const scoresStr = fs.readFileSync("./data/scores.txt", "utf-8");
  const scoresArr = scoresStr.trim().split("\n");
  const scoresNum = scoresArr.map((el) => {
    return Number(el);
  });
  return scoresNum;
}

function getStats() {
  const padArr = getPadawanNames();
  const scArr = getLightsaberScores();
  let arr = [];
  arr = padArr.map((el, i) => [el, scArr[i]]);
  return arr;
}

function writeStats(arr) {
  const result = arr.map((item) => `${item[0]} ${item[1]}`).join("\n");
  fs.writeFileSync("data/stats.txt", result);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
