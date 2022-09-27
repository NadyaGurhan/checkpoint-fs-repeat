const fs = require('fs')
module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  let arr = [];
  arr.push(fs.readFileSync('./data/padawans.txt', 'utf-8'))
  return arr
}
