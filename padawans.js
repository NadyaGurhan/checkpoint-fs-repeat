const fs = require("fs");
module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
const padaw = "./data/padawans.txt";
const data = fs.readFileSync(padaw, "utf8");

function getPadawanNames() {
  let res = [];
  for (let i = 0; i < data.length; i++) {
    res = data.split("\n");
  }
  return res.slice(0, 4);
}
