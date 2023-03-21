const fs = require("fs");
function getPadawanNames() {
  const name = fs.readFileSync("./data/padawans.txt", "utf8");
  return name.split("\n").slice(0, 4);
}
function getLightsaberScores() {
  const scor = fs.readFileSync("./data/scores.txt", "utf8");
  return scor.split("\n").map((el) => Number(el));
}
function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((el, i) => [el, scores[i]]);
}
function writeStats() {
  const writeStats = getStats().join("\n").replaceAll(",", " ");
  // console.log(writeStats)
  fs.writeFileSync("data/stats.txt",writeStats,'utf8');
}
writeStats()
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
