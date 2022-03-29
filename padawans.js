const fs = require('fs');
let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const names = padawans;

function getPadawanNames() {
  return names
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
