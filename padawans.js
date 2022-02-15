const fs = require("fs");
const readPadawans = fs.readFileSync("./data/padawans.txt", "utf8");
const readScores = fs.readFileSync("./data/scores.txt", "utf8");

function getPadawanNames() {
  let names = [];
  readPadawans.split("\n");
  console.log(readPadawans);
}
getPadawanNames();
module.exports = {
  // getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
