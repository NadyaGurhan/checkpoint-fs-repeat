const fs = require("fs");
const padList = fs.readFileSync("./data/padawans.txt", "utf-8");

function getPadawanNames() {
  return padList.split("\n").slice(0, -1);
}
// let padNames=getPadawanNames();
// console.log(getPadawanNames());

const padScor = fs.readFileSync("./data/scores.txt", "utf-8");
function getPadawanScores() {
  return padScor.split("\n").map((el=>+el));
}
// let paddScoores=getPadawanScores();
// console.log(getPadawanScores());

// function getStat() {
//   return 
// }
// const file=fs.appendFileSync(`./data/stats.txt`);
// console.log(getStat());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
