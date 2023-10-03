const fs = require("fs");
function getPadawanNames() {
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8");
  return padawans.split("\n");
}

function getLightsaberScores() {
  const scores = fs.readFileSync("./data/scores.txt", "utf8");
  return scores.split("\n").map((n) => +n);
}

function getStats() {
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8");
  const scores = fs.readFileSync("./data/scores.txt", "utf8");
  const padawansArr = padawans.split("\n");
  const scoresArr = scores.split("\n");
  const result = [];
  for (let i = 0; i < padawansArr.length; i += 1) {
    result.push([padawansArr[i], +scoresArr[i]]);
  }
  return result;
}
function writeStats() {
  const stat = getStats().join("\n");
  return stat.replace(",", " ");
}
console.log(writeStats());
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
