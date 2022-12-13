const { Console } = require("console");
const fs = require("fs");

const names = fs.readFileSync("./data/padawans.txt", "utf8").trim().split("\n");

function getPadawanNames() {
  return names;
}
const saber = fs.readFileSync("./data/scores.txt", "utf8");

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
