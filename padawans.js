const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
function getPadawanNames() {
  return padawans.split('\n');
}
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
const scor = scores.split('\n');
function getLightsaberScores() {
  return scor.map((el) => +el);
}
function getStats {

}
module.exports = {
  getPadawanNames,
  // getPadawanScores,
  getLightsaberScores,
  getStats,
  // writeStats,
};
