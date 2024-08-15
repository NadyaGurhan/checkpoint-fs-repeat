const fs = require("fs");
const { execPath } = require("process");

function getPadawanNames() {
  const names = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .trim()
    .split("\n");

  return names;
}

// console.log(getPadawanNames());

// ==================================

function getLightsaberScores() {
  const scores = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .trim()
    .split("\n");

  for (let i = 0; i < scores.length; i += 1) {
    scores[i] = Number(scores[i]);
  }
  return scores;
}

// console.log(getLightsaberScores());

// ================================

function getStats() {
  const stats = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  for (let i = 0; i < names.length; i += 1) {
    stats.push([names[i], scores[i]]);
  }

  return stats;
}

// console.log(getStats());

// ===================================

function writeStats() {
  const stats = getStats().join("\n").replaceAll(",", " ");
  fs.writeFileSync("./data/stats.txt", stats);
}

// console.log(writeStats());

// ====================================

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
