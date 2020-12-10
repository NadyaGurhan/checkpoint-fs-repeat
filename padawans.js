const fs = require("fs");

function getPadawanNames() {
  let nameArray = fs
    .readFileSync("data/padawans.txt", "utf-8")
    .split("\n")
    .slice(0, -1);
  return nameArray;
}
function getLightsaberScores() {
  let padawanScoresArray = fs
    .readFileSync("data/scores.txt", "utf-8")
    .split("\n")
    .map((el) => parseFloat(el));
  return padawanScoresArray;
}
function getStats() {
  let nameArray = getPadawanNames();
  let padawanScoresArray = getLightsaberScores();
  let result = {};
  nameArray.forEach((key, i) => (result[key] = padawanScoresArray[i]));
  return Object.entries(result);
  // fs.writeFileSync("data/stats.txt", JSON.stringify(Object.entries(result)));
}

function writeStats() {
  const stats = getStats();
  let result = stats.join("\n").replace(/,/g, " ");
  fs.writeFileSync("data/stats.txt", result);
}

getLightsaberScores();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
