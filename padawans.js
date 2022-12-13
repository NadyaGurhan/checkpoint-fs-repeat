const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(count) {
  const padavanNames = [];
  for (let i = 0; i < count; i++) {
    padavanNames.push(fs.name());
  }
}
