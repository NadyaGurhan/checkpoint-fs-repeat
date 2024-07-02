const fs = require("fs");

const padawansArr = fs.readFileSync("./data/padawans.txt", "utf8").split("\n");
padawansArr.splice(padawansArr.length - 1);
function getPadawanNames() {
  return padawansArr;
}

const scoreArr = fs
  .readFileSync("./data/scores.txt", "utf8")
  .split("\n")
  .map((el) => +el);
function getLightsaberScores() {
  return scoreArr;
}

function getStats() {
  const res = [];
  for (let i = 0; i < padawansArr.length; i++) {
    res.push([padawansArr[i], scoreArr[i]]);
  }
  return res;
}

function writeStats() {
  const res = getStats().map((el) => el.join(" "));
  fs.writeFileSync("./data/stats.txt", res.join("\n"), "utf8");
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
