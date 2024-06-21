const fs = require("fs");

const padawansData = fs
  .readFileSync("./data/padawans.txt", "utf-8")
  .trim()
  .split("\n");
const scoresData = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");

function getPadawanNames() {
  return padawansData;
}

function getLightsaberScores() {
  return scoresData.map((el) => +el);
}

function getStats() {
  const result = [];
  for (let i = 0; i < scoresData.length; i++) {
    result.push([padawansData[i], +scoresData[i]]);
  }
  return result;
}

function writeStats() {
  const stats = getStats()
    .map((el) => el.join(" "))
    .join("\n");
  fs.writeFileSync("./data/stats.txt", stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
