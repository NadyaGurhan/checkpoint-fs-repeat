const fs = require('fs');
function getPadawantxt() {
  fs.readFileSync('./data/padawans.txt', 'utf8');
}
getPadawantxt();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
