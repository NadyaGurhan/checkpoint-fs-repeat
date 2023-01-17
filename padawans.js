const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(){
  let name = fs.readFileSync(".data/padavans.txt", "utf8");
  console.log(name);
}