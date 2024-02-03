const fs = require("fs");

function getPadawanNames() {
  return fs
    .readFileSync(`${__dirname}/data/padawans.txt`, "utf8")
    .trim()
    .split("\n");
}
console.log(getPadawanNames());

function getLightsaberScores() {
  return fs
    .readFileSync(`${__dirname}/data/scores.txt`, "utf8")
    .trim()
    .split("\n")
    .map((x) => +x);
}
console.log(getLightsaberScores());

function getStats() {
  const stats = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    stats.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return stats;
}
console.log(getStats());

function writeStats() {}
fs.appendFile(`${__dirname}/data/stats.txt`, "utf8" )
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
