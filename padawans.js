const fs = require("fs");

function getPadawanNames() {
  let names = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split("\n")
    .slice(0, -1);
  return names;
}

function getLightsaberScores() {
  let scores = fs
    .readFileSync("./data/scores.txt", "utf-8")
    .split("\n")
    .map((a) => +a);
  return scores;
}

function getStats() {
  let names = fs
    .readFileSync("./data/padawans.txt", "utf-8")
    .split("\n")
    .slice(0, -1);
  let scores = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");
  const stats = [];
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
// console.log(getLightsaberScores("./data/scores.txt"));
console.log(getStats("./data/scores.txt"));
