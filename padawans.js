const fs = require('fs');
const path = require('path');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

function getPadawanNames() {
  const res = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split('\n');
  return res;
}

function getLightsaberScores() {
  const result = fs.readFileSync('data/scores.txt', 'utf-8');

  return result.split('\n').map((el) => Number(el));
}
function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();

  return scores.map((el, i) => [padawans[i], el]);
}
