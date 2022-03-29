const fs = require('fs');

const padawansNames = fs.readFileSync('data/padawans.txt', 'utf-8');
const sabers = fs.readFileSync('data/scores.txt', 'utf-8');
console.log(padawansNames);
console.log(sabers);

const PATH = function getPadawanNames() {
  const pNames = padawansNames.trim().split('\n');
  console.log(pNames);
  return pNames;
};

function getLightsaberScores() {
  const lightSabers = sabers.trem().split('\n');
}

function getStats() {
  const pNames = padawansNames.split('\n');
  const lightSabers = sabers.split('\n');
  return // pause
}

function writeStats() {
  
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
