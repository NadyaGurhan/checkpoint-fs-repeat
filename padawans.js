const fs = require("fs");
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

let padawans = fs.readFileSync("../padawans.txt", "utf-8");

function getPadawanNames(text) {
  let arr = [];
  for (let i = 0; i < text.length; i += 1) {
    return arr.push(padawans);
  }
}
