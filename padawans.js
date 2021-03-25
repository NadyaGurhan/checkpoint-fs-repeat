const fs = require("fs");
const fileName = "./data/padawans.txt";
const fileScore = "./data/scores.txt";
const fileSave = ".data/stats.txt";

function getPadawanNames() {
  let name = [];
  return (name = fs.readFileSync(fileName, "utf-8").trim().split("\n"));
}

function getLightsaberScores() {
  let score = [];
  return (score = fs.readFileSync(fileScore, "utf-8").split("\n").map((el) => Number(el)));
}
function getStats() {
  return 
}
function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
