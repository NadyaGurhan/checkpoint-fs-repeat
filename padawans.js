const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
