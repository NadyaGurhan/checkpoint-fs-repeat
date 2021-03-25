const fs = require("fs")

function getPadawanNames() {
  return fs.readFileSync("./data/padawans.txt", "utf-8").split("\n").slice(0, -1)
}
function getLightsaberScores() {
  return fs.readFileSync("./data/scores.txt", "utf-8").split("\n").map(el => +el);
}
function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  return padawans.map((el, i) => [el, scores[i]])
}
function writeStats() {
  const stats = getStats();
  let resul = stats.map(el =>
    el.join(" ")).join("\n")
  fs.appendFileSync('./data/stats.txt', resul)
}





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
