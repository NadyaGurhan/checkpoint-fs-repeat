const fs = require("fs");
const names = fs.readFileSync(`${__dirname}/data/padawans.txt`, "utf8");
console.log(names);
const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, "utf8");

function getPadawanNames() {
  return names.split("\n").join("").trim().split("\r");
}
// console.log(getPadawanNames());
function getLightsaberScores() {
  return scores
    .split("\n")
    .join("")
    .trim()
    .split("\r")
    .map((el) => Number(el));
}
// console.log(getLightsaberScores());

function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let status = [];
  for (let i = 0; i < names.length; i++) {
    {
      status.push([names[i], scores[i]]);
    }
  }
  return status;
}
// console.log(getStats());

function writeStats() {
  let stats = getStats().join("\n");
  return fs.writeFileSync("./data/stats.txt", stats, "utf-8");
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
