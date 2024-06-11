const fs = require("fs");

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats
};

const padawansData = fs
  .readFileSync("./data/padawans.txt", "utf-8")
  .split("\n");
const scoresData = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");

function getPadawanNames() {
  const padawans = [];

  for (let i = 0; i < padawansData.length - 1; i++) {
    padawans.push(padawansData[i]);
  }
  return padawans;
}

function getLightsaberScores() {
  const scores = [];
  for (let i = 0; i < scoresData.length; i++) {
    scores.push(+scoresData[i]);
  }
  return scores;
}

function getStats() {
  const stats = [];
  for (let i = 0; i < scoresData.length; i++) {
    stats.push([padawansData[i], +scoresData[i]]);
  }
  return stats;
}

function writeStats() {
  // надо ещё разделить с помощью \n не успел дописть...
  fs.writeFileSync("./data/stats.txt", `${getStats()}`);
};

console.log(writeStats());
