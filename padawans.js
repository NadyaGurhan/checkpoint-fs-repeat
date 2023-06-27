const fs = require('fs')

function getPadawanNames() {
  const getPadawanNames = fs.readFileSync('data/padawans.txt', utf8);

}
function getLightsaberScores() {
  const getLightsaberScores = fs.readFileSync('./data/scores.txt');
}
function getStats() {

}

function writeStats(){

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
