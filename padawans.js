const fs = require("fs");

function getPadawanNames() {
  let names = fs.readFileSync("./data/padawans.txt", "utf-8");
  return names.trim().split("\n");
}

function getLightsaberScores() {
  let scores = fs.readFileSync("./data/scores.txt", "utf-8");
  return scores.trim().split("\n").map(Number);
}

function getStats() {
  let table = {};
  let keys = getPadawanNames();
  let values = getLightsaberScores();
  keys.forEach((key, i) => (table[key] = values[i]));
  return Object.entries(table);
}

function writeStats() {
  const newFile = fs.appendFileSync('./data/stats.txt', getStats().join('\n').replaceAll(',', ' '))
  return newFile;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
