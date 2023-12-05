const fs = require("fs");

function getPadawanNames() {
  const namesStr = fs.readFileSync("./data/padawans.txt", "utf-8").trim();
  names = namesStr.split("\n");
  return names;
}

function getLightsaberScores() {}

function getStats() {}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
