const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};


function getPadawanNames () {
  const name = fs.readFileSync('./data/padawans.txt', "utf8")
  return name.split('\n')
}