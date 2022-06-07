const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  const arr = [];
  const slpitPadawans = padawans.split('\n');
  for (let i = 0; i < slpitPadawans.length - 1; i++) {
    arr.push(slpitPadawans[i]);
  }
  return arr;
}

function getLightsaberScores() {
  splitScores = scores.split('\n');
  const arr = [];
  for(let i = 0; i < splitScores.length; i++) {
  arr.push(Number(splitScores[i]));
  }
  return arr;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
