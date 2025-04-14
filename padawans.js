const fs = require('fs')

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padawans = fs.readFileSync('.data/padawans.txt', 'utf-8');
  return padawans
};
getPadawanNames()