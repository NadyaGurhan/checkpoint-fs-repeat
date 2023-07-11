const { log } = require("console");
const fs = require("fs");
const names = fs.readFileSync("data/padawans.txt", "utf8");
const stats = fs.readFileSync("data/scores.txt", "utf8");
console.log(names);

function getPadawanNames(names) {
  let newNames = names.split("\r\n");
  newNames.pop();
  return newNames;
}
console.log(getPadawanNames(names));

function getLightsaberScores(stats) {
  let newStats = stats.split("\r\n").map(parseFloat);
  return newStats;
}
console.log(getLightsaberScores(stats));

function getStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
