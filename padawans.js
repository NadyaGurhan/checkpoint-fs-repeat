const fs = require("fs");
const names = fs.readFileSync("./data/padawans.txt").toString("utf-8");
const scores = fs.readFileSync("./data/scores.txt").toString("utf-8");

function getPadawanNames() {
  const arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push(names[i]);
  }
  return arr.join("\n");
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const arr = [];
  for (let i = 0; i < scores.length; i++) {
    arr.push(scores[i]);
  }
  return arr.join("\n");
}

console.log(getLightsaberScores());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
