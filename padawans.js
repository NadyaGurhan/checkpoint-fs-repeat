const fs = require('fs')
const { EOL } = require('os');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split(EOL)

function getPadawanNames() {
  return padawans
}


module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
