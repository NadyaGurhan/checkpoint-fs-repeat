const fs = require('fs');
let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const padaw = padawans.trim().split(' ');

function getPadawanNames() {
  return padaw;
}

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
