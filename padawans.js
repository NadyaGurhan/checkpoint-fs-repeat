const fs = require('fs')
function getPadawanNames() {
  const names = fs.readFileSync("./data/padawans.txt","utf-8");
  return names.split("\n");
}
function getLightsaberScores () {
const scores = fs.readFile("./data.scores.txt","utf-8")
return scores.split("\n")
}





module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

