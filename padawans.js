const { log } = require("console");
const fs = require("fs");
const { EOL } = require("os");

function getPadawanNames() {
  const padawans = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split(EOL)
    .filter((x) => x !== "");
  return padawans;
}

function getLightsaberScores() {
  const scores = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split(EOL)
    .filter((x) => x !== "")
    .map((x) => (x = Number(x)));
  return scores;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i++) {
    padawans[i] = [padawans[i], scores[i]];
  }
  return padawans;
}

function writeStats() {
  const stats = getStats();
  const statsFile = fs.writeFileSync("./data/stats.txt", "");
  for (let i = 0; i < stats.length; i++) {
    fs.appendFileSync(
      "./data/stats.txt",
      stats[i].join(" ") + (i === stats.length - 1 ? "" : EOL)
    );
  }
  return stats;
}

console.log(getLightsaberScores());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
