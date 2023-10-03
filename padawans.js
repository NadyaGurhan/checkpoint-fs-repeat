const fs = require("fs");
module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  let name = fs.readFileSync(./padawans.txt, "utf8");
  //let name = data.trim(). split("\n")
  return name  
}
console.log(getPadawanNames())