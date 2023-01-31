const fs = require("fs");

function getPadawanNames() {
  let result = [];
  let padaw = fs.readFileSync("data/padawans.txt", "utf8");
  for (let i = 0; i < padaw; i++) {
    result.push(padaw);
  }
  return result;
}

function getLightsaberScores() {
  let result = [];
  let sabers = fs.readFileSync("data/scores.txt", "utf8");
  for (let i = 0; i < sabers; i++) {
    result.push(sabers);
  }
  return result;
}
const getStats = 0;
const writeStats = 0;

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
