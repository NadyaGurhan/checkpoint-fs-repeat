const fs = require('fs')

function getPadawanNames() {
  let path = fs.readFileSync ('./data/padawans.txt',{encoding: 'utf8'});
  return path.split()
}

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
