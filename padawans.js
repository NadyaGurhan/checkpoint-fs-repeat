const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  let data = fs.readFileSync("data/padawans.txt", "utf-8");
  let newData = data.split("\n");
  return newData.slice(0, 4);
}

getPadawanNames();

function getLightsaberScores() {
  let scores = fs.readFileSync("data/scores.txt", "utf-8");
  let newScores = scores.split("\n").map((Element) => Number(Element));
  return newScores;
}

getLightsaberScores();

function getStats() {}

function writeStats() {}
