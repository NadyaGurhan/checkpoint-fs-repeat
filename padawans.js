const fs = require("fs");

const padawans = fs.readFileSync("data/padawans.txt", "utf-8");
const scrores = fs.readFileSync('data/scores.txt', 'utf-8');
const score = scrores.split('\n');

console.log(score)

function getPadawanNames() {
  const names = padawans.split("\n").slice(0, 4);
  return names;
}
function getLightsaberScores() {
  const score = scrores.split('\n');
  return score;
}
function getStats() {}
function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
