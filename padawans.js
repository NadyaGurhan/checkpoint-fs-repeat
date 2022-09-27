const fs = require('fs')



function getPadawanNames() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n')
  return names
}

getPadawanNames()

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

