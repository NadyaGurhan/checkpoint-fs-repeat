const fs = require("fs");

function listNames(fileName) {
  return fs.readFileSync("./data/padawans.txt", "utf8");
  // .split("\n")
  // .slice(1)
  // .map((elem) => elem.split(", "));
}

function getPadawanNames() {
  return listNames().split("\n").slice(0, -1);
}
// console.log(getPadawanNames());

function listScores(fileName) {
  return fs.readFileSync("./data/scores.txt", "utf8");
}

function getLightsaberScores() {
  return listScores()
    .split("\n")
    .map((elem) => Number(elem));
}
// console.log(getLightsaberScores());

function getStats() {
  const arrNames = getPadawanNames();
  const arrScores = getLightsaberScores();
  const newArr = [];
  arrNames.map((el, i) => newArr.push([el, arrScores[i]]));
  return newArr;
}
console.log(getStats());

function writeStats() {
  const arr = getStats();
  fs.writeFileSync("data/stats.txt", arr.join('\n'));
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
