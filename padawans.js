const fs = require("fs");
const padawans = fs.readFileSync("./data/padawans.txt", "utf-8");
const scores = fs.readFileSync("./data/scores.txt", "utf-8");

function getPadawanNames() {
  return padawans.trim().split("\n");
}

console.log(getPadawanNames());

function getLightsaberScores() {
  let scoresSplit = scores.split("\n");
  let array = [];
  for (let i = 0; i < scoresSplit.length; i++) {
    array.push(+scoresSplit[i]);
  }
  return array;
}

console.log(getLightsaberScores());

function getStats() {
  let result = [];
  let name = getPadawanNames();
  let scores = getLightsaberScores();
  for (let i = 0; i < name.length; i++) {
    result.push([name[i], scores[i]]);
  }
  return result;
}
console.log(getStats());

function writeStats() {
  const stats = getStats();
  for (let i = 0; i < stats.length; i++) {
    fs.appendFileSync("./data/stats.txt", `${stats[i]}\n`);
  }
}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
