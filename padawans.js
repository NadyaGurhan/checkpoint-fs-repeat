const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const names = fs.readFileSync(path.join(__dirname, './data/padawans.txt'), 'utf-8');
  return names;
}

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
