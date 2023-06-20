const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const dataPadavans = fs.readFileSync("./data/padawans.txt", "utf-8");
const scores = fs.readFileSync("./data/scores.txt", "utf-8");

function getPadawanNames() {
  return dataPadavans.trim().split("\n");
}

function getLightsaberScores() {
  const arr = scores.trim().split("\n");
  return arr.map((item) => +item);
}

function getStats() {
  const padawan = getPadawanNames();
  const lightsabel = getLightsaberScores();
  let answer = [];
  for (let i = 0; i < padawan.length; i++) {
    answer.push([padawan[i], lightsabel[i]]);
  }
  return answer;
}

function writeStats() {
  const data = getStats();
  const result = data.map((item) => item.join(" "));
  fs.writeFileSync("./data/stats.txt", result.join("\n"));
}
