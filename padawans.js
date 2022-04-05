const fs = require('fs');

function getPadawanNames() {
  fs.readFileSync('./data/padawans.txt', 'utf8');
}
function getLightsaberScores() {
  fs.readFileSync('./data/padawans.txt', 'utf8');
}
function getStats() {
  fs.readFileSync('./data/padawans.txt', 'utf8');
}
function writeStats() {
  fs.writeFileSync('.data/stats.txt');
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
