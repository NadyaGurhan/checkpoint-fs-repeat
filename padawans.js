const fs = require("fs");
function getPadawanNames() {
  return fs.readFileSync("data/padawans.txt", "utf-8").split("/n");
}
function getLightsaberScores() {}
function getStats() {}
function writeStats() {}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
