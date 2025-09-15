const fs = require('fs')
module.exports = {
  getPadawanNames
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  const padawanNames = fs.readFileSync('data/padawans.txt','utf-8').split('\n').filter((name) => name.length > 0)
  return padawanNames
}
getPadawanNames()
