const fs = require("fs");

function getPadawanNames() {
  return fs
    .readFileSync(`${__dirname}/data/padawans.txt`, "utf8")
    .split("\n")
    .slice(0, -1);
}

function getLightsaberScores() {
  return fs
    .readFileSync(`${__dirname}/data/scores.txt`, "utf8")
    .split("\n")
    .map((item) => +item);
}

function getStats() {
  const result = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    result[i] = [getPadawanNames()[i], getLightsaberScores()[i]];
  }
  return result;
}

function writeStats() {
  const data = getStats()
    .map((item) => item.join(" "))
    .join("\n");
  fs.writeFileSync("data/stats.txt", data, "utf8");
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
