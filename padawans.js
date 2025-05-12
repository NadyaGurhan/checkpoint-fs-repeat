const fs = require('fs');

function getPadawanNames() {
  const file = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const result = file.trim().split('\r\n');
  return result;
}

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
