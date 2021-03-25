const fs = require("fs");

function getPadawanNames() {
  return fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split("\n")
    .slice(0, 4);
}

function getLightsaberScores() {
  return fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .slice(0, 4)
    .map((element) => +element);
}

function getStats() {
  const names = getPadawanNames();
  const score = getLightsaberScores();
  return names.map((element, index) => [element, score[index]]);
}

function writeStats() {
  const data = getStats()
    .map((element) => element.join(" "))
    .join("\n");
  fs.writeFileSync("./data/stats.txt", data);
  return data;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
