const fs = require('fs');

const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8');
const getLightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');
function getPadawanNames() {
  const arr = padawan.split('\n');
  arr.pop();
  return arr;
}

module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
