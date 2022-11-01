const fs = require('fs');

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};

const text1 = fs.readFileSync('data/padawans.txt', 'utf8');
function getPadawanNames() {
  return text1.trim().split('\n');
}
