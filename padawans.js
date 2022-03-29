const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawans.trim().split('\n')
}

function getLightsaberScores() {
  return scores.trim()
    .split('\n')
    .map((el) => +(el))
}
function getStats() {
  let newPadawans = padawans.trim().split('\n');
  let newScores = scores.trim().split('\n').map((el) => +(el));
  let arr = [];
  for (let i = 0; i < newPadawans.length; i++) {
    arr.push(newPadawans[i] + ", " + newScores[i]);
  }
}
function writeStats() {
  return 
}

console.log(getStats());




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
