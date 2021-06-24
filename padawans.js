const fs = require('fs');

function getPadawanNames() {
  const result = fs.readFileSync('data/padawans.txt', 'utf8')
    .trim()
    .split('\n');
  return result;
}

function getLightsaberScores() {
  const result = fs.readFileSync('data/scores.txt', 'utf8')
    .trim()
    .split('\n');
  return result;

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
