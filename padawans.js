const fs = require("fs");

const scores = fs.readFileSync("./data/scores.txt", "utf8");
const padawans = fs.readFileSync("./data/padawans.txt", "utf8");

function getPadawanNames() {
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8");
  return padawans.split("\n");
}
function getLightsaberScores() {
  const scores = fs.readFileSync("./data/scores.txt", "utf8");
  return scores.split("\n").map(Number);
}
function getStats() {
  let newStats = [];
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8").split("\n");
  const scores = fs
    .readFileSync("./data/scores.txt", "utf8")
    .split("\n")
    .map(Number);
  for (let i = 0; i < padawans.length; i++) {
    let count = [padawans[i], scores[i]];
    newStats.push(count);
  }
  return newStats;
}
function writeStats() {
  let newStats = "";
  const padawans = fs.readFileSync("./data/padawans.txt", "utf8").split("\n");
  const scores = fs.readFileSync("./data/scores.txt", "utf8").split("\n");
  for (let i = 0; i < padawans.length; i++) {
    let count = [`${padawans[i]} ${scores[i]}`];
    {
      if (i < padawans.length - 1) {
        newStats += count + "\n";
      } else {
        newStats += count;
      }
    }
  }
  fs.writeFileSync("data/stats.txt", newStats, "utf8");
}
//  console.log(writeStats())
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
