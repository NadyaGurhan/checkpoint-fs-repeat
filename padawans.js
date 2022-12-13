const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadavanNames(count) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(i);
  }
  return result;
}
