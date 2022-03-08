const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  return padawans.trim().split('\n');
}
// console.log(padawans);
function getLightsaberScores() {
// for (let i = 0; i < scores; i++) {
  return scores.split('\n').map(el => Number(el));
// }
}

function getStats() {
  return 
}
function writeStats() {
  return 
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
