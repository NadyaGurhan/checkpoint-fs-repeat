const fs = require("fs");

function getPadawanNames() {
  return fs
    .readFileSync("data/padawans.txt", "utf-8")
    .split("\n")
    .filter((el) => el !== "");
}

function getLightsaberScores() {
  return fs
    .readFileSync("data/scores.txt", "utf-8")
    .split("\n")
    .map((el) => Number(el));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];
  names.map((el, i) => stats.push([el, scores[i]]));
  return stats;
}

function writeStats() {
  fs.writeFileSync(
    "data/stats.txt",
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
