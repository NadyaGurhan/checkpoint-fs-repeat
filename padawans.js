const fs = require("fs");

const padawans = fs.readFileSync("./data/padawans.txt", "utf-8");
const score = fs.readFileSync("./data/scores.txt", "utf-8");

function getPadawanNames() {
  const arr = [];
  const padawan = padawans.split("\n").slice(0, -1);
  arr.push(padawan);
  return arr.flat();
}
getPadawanNames();

function getLightsaberScores() {
  const scores = score.split("\n");
  return scores.map((el) => Number(el));
}
getLightsaberScores();

function getStats() {}
getStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
