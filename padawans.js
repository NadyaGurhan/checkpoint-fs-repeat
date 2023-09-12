const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  return data.trim().split('\n');
}
getPadawanNames();
function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8');
  return data.split('\n').map(Number);
}
getLightsaberScores();
function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, index) => [name, scores[index]]);
}
getStats();
 writeStats() {
  fs.writeFileSync('data/stats.txt', 'utf-8')

 }
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
 writeStats,
};
