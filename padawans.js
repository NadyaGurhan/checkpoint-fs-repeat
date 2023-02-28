const fs = require("fs");
let namePadawans = fs.readFileSync("./data/padawans.txt", "utf-8");

const getPadawanNames = (namePadawans) => {};
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
getPadawanNames()