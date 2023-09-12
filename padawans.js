const fs = require("fs");

function getPadawanNames() {
  const arr = fs.readFileSync("./data/padawans.txt").toString().split("\n");
  return arr;
}
function getLightsaberScores() {
  let arr = fs.readFileSync("./data/scores.txt").toString().split("\n");
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    out += Number(arr[i]);
  }
  return out;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
