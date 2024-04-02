const fs = require('fs');


function getPadawanNames() {
  const getPadawanNames = fs.readFileSync('data/padavans.txt');
}

function getLightsaberScores() {

}

function getStats() {

}
function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
