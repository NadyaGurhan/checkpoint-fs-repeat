const fs = require("fs");
function getPadawanNames() {
  let getNames = fs.readFileSync("./data/padawans.txt", "utf-8");
  let namesArr = getNames.split("\n");
  console.log(namesArr);
}
console.log(getPadawanNames());

// const padawans = new getPadawanNames();
// padawans.parse();
// class getLightsaberScores {
//   parse(scores) {
//     let getScores = fs.readFileSync("./data/scores.txt", "utf-8");
//   }
// }

module.exports = {
  getPadawanNames,
  //getLightsaberScores,
  // getStats,
  // writeStats,
};
