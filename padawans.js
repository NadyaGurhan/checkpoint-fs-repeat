const fs = require("fs");

function getPadawanNames() {
 names = fs.readFileSync("./data/padawans.txt", "utf-8")
 names = names.split('\n')
 names = names.slice(0, names.length - 1)
  return names
}

function getLightsaberScores() {
 scores = fs.readFileSync("./data/scores.txt", "utf-8")
 scores = scores.split('\n')
 scores = scores.map(element => +element)
  return scores
}

function getStats() {}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
