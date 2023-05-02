const fs = require('fs');

function getPadawanNames() {
  fs.readFileSync('./data/padawans.txt');
}
const names = getPadawanNames();
console.log(names);

function getLightsaberScores() {
  fs.readFileSync('./data/scores.txt');
}
const scores = getLightsaberScores();
console.log(scores);

function getStats(names, scores) {
  const arr = [];
  for (let i = 0; i < 4; i++) {
    arr.push(names, scores);
  }
  return arr
}
console.log(getStatus(names, scores))

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
