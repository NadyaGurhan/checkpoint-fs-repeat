const { isUtf8 } = require('buffer');
const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'Utf8')
}