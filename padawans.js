const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const filePath = './data/padawans.txt';
  const names = fs.readFileSync(filePath, 'utf8');
  return names.split('\r\n');
}
console.log(getPadawanNames());
function getLightsaberScores() {
  const filePath = './data/scores.txt';
  const scores = fs.readFileSync(filePath, 'utf8');
  return scores.split('\r\n');
}
console.log(getLightsaberScores())
// console.log(getLightsaberScores())

function getStats() {

}
function writeStats() {

}
