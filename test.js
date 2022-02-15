const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, 4);
}
function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf8')
    .split('\n')
    .map((el) => +el);
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
