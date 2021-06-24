const fs = require("fs");

function getPadawanNames() {
  return fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .slice(0, -1)
    .split("\n");
}

function getLightsaberScores() {
  return fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .map((item) => (item = +item));
}

function getStats() {
  let arr = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    arr.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return arr;
}

function writeStats() {
  let str = getStats().join("\n");

  return fs.writeFileSync("./data/stats.txt", str.replace(/,/g, " "));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
