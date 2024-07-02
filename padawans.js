const fs = require("fs");

function getPadawanNames() {
  return [...fs.readFileSync("./data/padawans.txt", "utf-8").split("\n")];
}

function getLightsaberScores() {
  return [...fs.readFileSync("./data/scores.txt", "utf-8").split("\n")].map(
    (score) => Number(score)
  );
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();

  return new Array(scores.length)
    .fill(0)
    .map((_, index) => [padawans[index], +scores[index]]);
}

function writeStats() {
  const stats = getStats();
  const data = stats.map((stat) => stat.join(" ")).join("\n");

  fs.writeFileSync("./data/stats.txt", data, "utf8");
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
