const fs = require('fs');

fs.readFileSync('data/padawans.txt');

function getPadawanNames() {
  for (let i = 0; i <= fs.length; i += 1) {
    return (fs.split(' '));
  }
}
// console.log(getPadawanNames());

function getLightsaberScores() {
  return fs.readFileSync('data/scores.txt');
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
