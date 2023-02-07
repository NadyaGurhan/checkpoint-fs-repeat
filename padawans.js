const fs = require("fs");
let filePadaw = "./data/padawans.txt";
let names = fs.readFileSync(filePadaw, "utf8");
let padsco = fs.readFileSync(filePadaw, "utf8");

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  const padaw = names.split(",");
  return padaw;
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const score = padsco.split(",");
  return score;
}
console.log(getPadawanNames());