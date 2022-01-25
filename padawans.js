const fs = require('fs');
const padavans = fs.readFileSync('./data/padawans.txt', 'utf8');
//console.log(padavans);
const scores = fs.readFileSync('./data/scores.txt', 'utf8');
//console.log(scores);
function getPadawanNames() {
  return padavans.slice(0, -1).split('\n');
}
console.log(getPadawanNames());

function getLightsaberScores() {
  return scores.split('\n').map((i) => i * 1);
}
console.log(getLightsaberScores());

function getStats() {
  let arr = [];
  let padavans = getPadawanNames();
  let scores = getLightsaberScores();
  for (let i = 0; i < padavans.length; i++) {
    let arrMin = [];
    arrMin.push(padavans[i], scores[i]);
    arr.push(arrMin)
  }
  return arr;
}
console.log(getStats());






module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
