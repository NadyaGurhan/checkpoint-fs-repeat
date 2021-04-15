const fs = require("fs");
function getPadawanNames() {
  let getNames = fs.readFileSync("./data/padawans.txt", "utf-8");
  let arr = getNames.trim().split("\n");
  return arr;
}

function getLightsaberScores() {
  let getScores = fs.readFileSync("./data/scores.txt", "utf-8");
  let arrNum = getScores.split("\n");
  return arrNum.map((el) => +el);
}

function getStats() {
  let info = [];
  let arr = getPadawanNames();
  let arrStat = getLightsaberScores();
  for (let i = 0; i < arr.length; i++) {
    info.push([arr[i], arrStat[i]]);
  }
  return info;
}
function writeStats(stats) {
  let write = stats.join("\n").replace(/,/g, ' ');
  let a = fs.appendFileSync("./data/stats.txt", write);
  return a;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
