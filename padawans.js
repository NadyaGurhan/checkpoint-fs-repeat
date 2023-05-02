const fs = require("fs");
module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  return fs.readFileSync("./data/padawans.txt", "utf-8").trim().split("\n");
}

console.log(getPadawanNames());
