
const fs = require("fs");


function getPadawanNames() {
  let file = fs.readFileSync("./data/padawans.txt", "utf8");
  let mas = file.split("\n");
 return mas;
}
console.log(getPadawanNames())







module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
