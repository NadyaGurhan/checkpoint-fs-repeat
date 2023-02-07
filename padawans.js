const fs = require("fs");
const filePadawanName = __dirname + "/data/padawans.txt";
const fileScores = __dirname + "/data/scores.txt";

function getPadawanNames() {
  let padawanName = fs
    .readFileSync(filePadawanName, "utf8")
    .split("\n")
    .slice(0, -1);
  return padawanName;
}
function getLightsaberScores() {
  let lightScores = fs
    .readFileSync(fileScores, "utf8")
    .split("\n")
    .map((el) => Number(el));

  return lightScores;
}

function getStats() {
  let getStatsName = fs
    .readFileSync(filePadawanName, "utf8")
    .split("\n")
    .slice(0, -1);
  let getStatsScores = fs
    .readFileSync(fileScores, "utf8")
    .split("\n")
    .map((el) => Number(el));
    

  return getStatsName, getStatsScores;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
