const fs = require("fs");
function getPadawanNames() {
  let arr = [];
  let result = fs
    .readFileSync("./data/padawans.txt", "utf8")
    .toString()
    .split("/n");
  arr.push(result);

  return arr;
}

getPadawanNames();

function getLightsaberScores() {}
function getStats() {}
function writeStats() {}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
