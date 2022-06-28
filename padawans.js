const fs = require("fs");

function getPadawanNames() {
  const names = fs.readFileSync("./data/padawans.txt", "utf-8");
  return names.split(" ");
}
getPadawanNames();

function getLightsaberScores() {
  const nam = fs.readFileSync(`data/scores.txt`, "utf-8");
  return nam.split(" ");
}
getLightsaberScores();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
