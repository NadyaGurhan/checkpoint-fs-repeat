const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padawan = fs.readFileSync('data/padawans.txt', 'utf-8');
  const padawanNames = padawan.split('\n');
  return padawanNames;
}
