const fs = require('fs');
const padawans = fs.readFileSync('data/padawans.txt', 'utf-8');
// console.log(padawans);
const saberScore = fs.readFileSync('data/scores.txt', 'utf-8');
const stat = fs.readFileSync('data/stats.txt', 'utf-8');

const getPadawanNames = () => {
  let padawansArr = padawans.split();
  return padawansArr;
};
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
