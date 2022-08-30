const fs = require('fs');
const path = require('path');

const padawans1 = fs.readFileSync(path.join(__dirname, 'data/padawans.txt'), 'utf8');

// eslint-disable-next-line no-unused-vars
const ligth = fs.writeFileSync(path.join(__dirname), '/data/scores.txt', 'utf8');

function getPadawanNames() {
  const result = [];
  const padawans = padawans1;
  for (let i = 0; i < padawans.split(', ').length; i += 1) {
    result.push(padawans[i]);
  }
  return result;
}
// eslint-disable-next-line no-unused-vars
function getLightsaberScores(ligth) {
  const result1 = [];
  for (let i = 0; i < ligth.length; i++) {
    result1.push(padawans[i]);
  }
  return result1;
}
function getStats(params) {

}
function writeStats(params) {

}
// eslint-disable-next-line no-undef
//
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
