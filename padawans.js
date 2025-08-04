const fs = require('fs');
const { toNamespacedPath } = require('path/win32');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
};

function getPadawanNames(){
const names = fs.readFileSync ('data/padawans.txt', 'utf-8');
return names.split();
}

function getLightsaberScores(){
const stats  = fs.readFileSync ('data/scores.txt', 'utf-8');
return stats.split();
}

function getStats () {
  const names = getPadawanNames();
  const stats = getLightsaberScores();
  const allStats = names.map((a, b) => [a, allStats[b]]);
  return allStats;
}