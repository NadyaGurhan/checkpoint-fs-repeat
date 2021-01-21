const fs = require("fs");

function getPadawanNames() {
  return fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split("\n")
    .filter((el) => el.length > 0);
}

function getLightsaberScores() {
  return fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .filter((el) => el.length > 0)
    .map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];

  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], scores[i]]);
  }

  return stats;
}

function writeStats(arr) {
  fs.writeFileSync(
    "./data/stats.txt",
    arr.map((el) => el.join(" ")).join("\n"),
    "utf-8"
  );
}

// getPadawanNames();
// getLightsaberScores();
// getStats();
console.log(getStats());
// writeStats(stats);

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
