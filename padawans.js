const fs = require("fs");

const padawanNames = fs
  .readFileSync("./data/padawans.txt", "utf-8")
  .trim()
  .split("\n");

const lightsaberScores = fs
  .readFileSync("./data/scores.txt", "utf-8")
  .trim()
  .split("\n")
  .map((el) => Number(el));

function getPadawanNames() {
  return padawanNames;
}

function getLightsaberScores() {
  return lightsaberScores;
}

function getStats() {
  const arrPadawanScores = [];
  for (let i = 0; i < padawanNames.length; i++) {
    arrPadawanScores.push([padawanNames[i], lightsaberScores[i]]);
  }
  return arrPadawanScores;
}

function writeStats() {
  const statistics = getStats().join("\n").replaceAll(",", " ");
  const readStatistics = fs.writeFileSync("./data/stats.txt", statistics);
  return readStatistics;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
