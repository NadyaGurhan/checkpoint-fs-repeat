const fs = require("fs");

function getPadawanNames() {
  const padawanNames = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .split("\n");
  // console.log(padawanNames);
  padawanNames.pop();

  // console.log(padawanNames);
  return padawanNames;
}
function getLightsaberScores() {
  const padawanScores = fs
    .readFileSync("./data/scores.txt", "utf8")
    .split("\n")
    .filter((score) => score !== "")
    .map((el) => +el);

  return padawanScores;
}

function getStats() {
  const padawanNames = fs
  .readFileSync("./data/padawans.txt", "utf8")
  .split("\n");

padawanNames.pop();
const padawanScores = fs
.readFileSync("./data/scores.txt", "utf8")
.split("\n")
.filter((score) => score !== "")
.map((el) => +el);

  return padawanNames.map((el,index))=>[el,padawanScores[index]]

}
function writeStats() {}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,

  writeStats,
};
