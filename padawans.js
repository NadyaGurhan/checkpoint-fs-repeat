const fs = require("fs");

function getPadawanNames() {
  const data = fs.readFileSync(__dirname + "/data/padawans.txt", {
    encoding: "utf-8",
  });
  const padawanArr = data.trim().split("\n");
  const namesArr = [];
  padawanArr.forEach((element) => {
    namesArr.push(element);
  });
  return namesArr;
}
function getLightsaberScores() {
  const data = fs.readFileSync(__dirname + "/data/scores.txt", {
    encoding: "utf-8",
  });
  const Arr = data.trim().split("\n");
  const csoresArr = [];
  Arr.forEach((element) => {
    csoresArr.push(+element);
  });
  return csoresArr;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const arr = [];
  for (let i = 0; i < padawans.length; i++) {
    arr.push([padawans[i], Number(scores[i])]);
  }
  return arr;
}

function writeStats(stats) {
  const res = stats.join("\n").replaceAll(",", " ");
  fs.writeFileSync("./data/stats.txt", res);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
