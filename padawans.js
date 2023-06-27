const fs = require("fs");

const dataPadawans = fs.readFileSync("./data/padawans.txt", "utf-8");
const scores = fs.readFileSync("./data/scores.txt", "utf-8");

function getPadawanNames() {
  return dataPadawans.trim().split("\n");
}


function getLightsaberScores() {
  const arr = scores.trim().split("\n");
  return arr.map((item) => +item);
}

function getStats( {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((el, i) => [el, scores[i]]);
})

function writeStats() {
  const data = getStats();
  const result = data.map((item) => item.join(" "));
  fs.writeFileSync("./data/stats.txt", result.join("\n"));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
