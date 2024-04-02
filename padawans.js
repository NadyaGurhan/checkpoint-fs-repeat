const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  return fs.writeFileSync('./data/padawans.txt').split('');
}

function getLightsaberScores() {

}

function getStats() {

}

function writeStats() {

}
