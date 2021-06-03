const fs = require('fs');

function getPadawanNames() {
  let data = fs.readFileSync('./data/padawans.txt', 'utf8').trim();
  let padawansNames = data.split('\n');
  return padawansNames;
}

function getLightsaberScores() {
  let data = fs.readFileSync('./data/scores.txt', 'utf8').trim();
  let padawansScores = data.split('\n');
  return padawansScores;
}
function getStats() {
  return padawansStats;
}
function writeStats(padawansStats) {
  Object.values(padawansStats);
  fs.writeFileSync('data/stats.txt', 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  writeStats,
};
