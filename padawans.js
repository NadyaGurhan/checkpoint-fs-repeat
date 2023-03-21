const fs = require('fs')

function getPadawanNames() {
   let filePath = 'data/padawans.txt';
   let data = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
