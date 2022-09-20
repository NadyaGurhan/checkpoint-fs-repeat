const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  const x = fs.readFileSync('./data/padawans.txt', 'utf8');
  const y = x.trim().split('\n');
  return (y);
}
function getLightsaberScores() {
  const numb = fs.readFileSync('./data/scores.txt', 'utf8');
  const res = numb.trim().split('\n');
  }
  return res;
}
console.log (getLightsaberScores())
function getStats() {

}
function writeStats() {

}
