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
  const stats = [];
  padawans.forEach((element, i) => stats.push([padawans[i], scores[i]]));
  return stats;
}

function writeStats() {
  const stats = getStats();
  const statsFile = fs.writeFileSync("./data/stats.txt", "");
  stats.forEach((element, i) =>
    fs.appendFileSync(
      "./data/stats.txt",
      element.join(" ") + (i === stats.length - 1 ? "" : EOL)
    )
  );
  return stats;
}

console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
