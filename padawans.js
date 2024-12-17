const fs = require('fs')

function getPadawanNames(){
  const names = fs.readFileSync('data/padawans.txt')
  return names.toString().split(`\r\n`)
}




module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
