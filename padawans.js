const fs = require("fs");

const padawan = fs.readFileSync("./data/padawans.txt", "utf-8");
function getPadawanNames() {
  return padawan.split("\n");
}
console.log(getPadawanNames());
const scores = fs.readFileSync("./data/scores.txt", "utf-8");
function getLightsaberScores() {
  return scores.split("\n");
}
function getStats() {
  const a = padawan.split("\n") + scores.split("\n");
  return a;
}
function writeStats() {
  const b = padawan.split("\n") + scores.split("\n");
  const data = b;
  fs.writeFileSync("./data/stats.txt", data);
  return b;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
