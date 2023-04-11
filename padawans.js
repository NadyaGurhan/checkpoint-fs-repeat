const fs = require('fs')

function getPadawanNames() {
  const padawans = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split("\n")
    .slice(0, 4);
  return padawans;
}
function getLightsaberScores() {
  const scores = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .map((el) => +el);
  return scores;
}
function getStats() {
  return getPadawanNames().map((el, i) => [el, getLightsaberScores()[i]]);
}
function writeStats() {
  fs.writeFileSync(
    "./data/stats.txt",
    `${getStats().join("\n").replaceAll(",", " ")}`,
    "utf-8"
  );
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
