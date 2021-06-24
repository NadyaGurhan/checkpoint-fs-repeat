const fs = require('fs');

function getPadawanNames() {
  let data = fs.readFileSync('./data/padawans.txt', 'utf8').trim();
  let names = data.split('\n');
  return names;
}

function getLightsaberScores() {
  let data = fs.readFileSync('./data/scores.txt', 'utf8').trim();
  let scores = data.split('\n');
  return scores;
}
function getStats() {
  return stats;
}
function writeStats(stats) {
  Object.values(stats);
  fs.writeFileSync('data/stats.txt', 'utf8');
} 
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
