const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');
function getPadawanNames() {
  return padawans.trim().split('\n');
}
getPadawanNames();

function getLightsaberScores() {
  return scores.split('\n').map(el => Number(el));
}
getLightsaberScores();
module.exports = {
  getPadawanNames,
   getLightsaberScores,
  // getStats,
  // writeStats,
};
