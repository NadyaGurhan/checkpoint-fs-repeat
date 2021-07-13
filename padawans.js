const fs = require("fs");

function getPadawanNames() {
  const namesFromTxt = fs.readFileSync("./data/padawans.txt", "utf-8");
  const x = namesFromTxt.split("\n");
  x.pop();
  return x;
}

function getLightsaberScores() {
  const scoresTxt = fs.readFileSync("./data/scores.txt", "utf-8").split("\n");
  const arrOfScores = scoresTxt.map((el) => +el);
  return arrOfScores;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((el, i) => [el, scores[i]]);
}

function writeStats() {
  const wholeArr = getStats().join("\n").replace(/,/g, " ");
  return fs.writeFileSync("data/stats.txt", wholeArr, "utf-8");
}

console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
