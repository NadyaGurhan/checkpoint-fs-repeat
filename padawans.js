const fs = require("fs");
module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  let list = fs.readFileSync("./data/padawans.txt", "utf8").split(' ');
  console.log(list)
  return list;
}