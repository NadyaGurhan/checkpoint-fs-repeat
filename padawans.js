const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

const padawanNames = fs.readFileSync("data/padawans.txt", "utf-8");
const padawansWithoutBreak = padawanNames.replace(/\n/g, " ,");
const padawansArray = padawansWithoutBreak.split(" ");

function getPadawanNames() {
  return padawansArray;
}
getPadawanNames();

const scores = fs.readFileSync("data/scores.txt", "utf-8");
const scoresWithoutBreak = scores.replace(/\n/g, " ");
const scoresArray = scoresWithoutBreak.split(" ");

function getLightsaberScores() {
  return scoresArray;
}
