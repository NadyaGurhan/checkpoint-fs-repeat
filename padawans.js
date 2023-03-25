const fs = require("fs");

const padawans = fs.readFileSync("data/padawans.txt", "utf-8");
const scrores = fs.readFileSync("data/scores.txt", "utf-8");

function getPadawanNames() {
  const names = padawans.split("\n").slice(0, 4);
  return names;
}
// console.log(getPadawanNames());

function getLightsaberScores() {
  const score = scrores.split("\n").map((el) => +el);
  return score;
}
// console.log(getLightsaberScores());

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  return padawans.map((el, index) => [padawans[index], scores[index]]);
}
// console.log(getStats());

function writeStats() {
  const stats = getStats().map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('data/stats.txt', stats, 'utf-8');
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
