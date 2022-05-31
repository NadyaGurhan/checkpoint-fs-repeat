const fs = require('fs');
function getPadawanNames() {
  const array = fs.readFileSync("./data/padawans.txt", "utf8").split('\n')
  return array
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
