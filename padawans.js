const fs = require("fs");

function getPadawanNames() {
  const padawansNames = fs.readFileSync("data/padawans.txt", "utf8");
  const padawansArrNames = padawansNames.split("\n");
  padawansArrNames.pop();
  return padawansArrNames;
}
function getLightsaberScores() {
  const padawansScores = fs.readFileSync("data/scores.txt", "utf-8");
  const padawansArrScores = padawansScores.split("\n");
  return padawansArrScores.map((el) => +el);
}

function getStats() {
  const padawansArrNames = getPadawanNames();
  const padawansArrScores = getLightsaberScores();
  const padawansArrStats = new Array(padawansArrNames.length).fill([]);
  for (let i = 0; i < padawansArrNames.length; i += 1) {
    padawansArrStats[i] = [padawansArrNames[i], padawansArrScores[i]];
  }
  return padawansArrStats;
}

function writeStats() {
  const padawansArrStats = getStats();
  const statsString = padawansArrStats.join("\n").replaceAll(",", " ");
  fs.writeFileSync("data/stats.txt", statsString);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
