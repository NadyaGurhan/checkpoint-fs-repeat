const fs = require('fs')
const path = require("path");




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
const padawansList = fs.readFileSync(
  path.join(__dirname, "./data/scores.txt"),
  "utf-8"
);
function getPadawanNames() {
  let padawans = padawansList.split("\n");
  return padawans;
}

function getLightsaberScores() {
  const scoreList = fs.readFileSync(
    path.join(__dirname, "./data/scores.txt"),
    "utf-8"
  );
  let score = scoreList.split("\n");
  return score;
}
