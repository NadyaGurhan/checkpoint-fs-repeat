const fs = require("fs");

function getPadawanNames() {
  let arr = fs.readFileSync(`./data/padawans.txt`, "utf-8").split("\n");
  arr.splice(-1, 1);
  return arr;
}

function getLightsaberScores() {
  let arr = fs.readFileSync(`./data/padawans.txt`, "uft-8").split("\n");
  arr = arr.map((item) => Namber(item));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
