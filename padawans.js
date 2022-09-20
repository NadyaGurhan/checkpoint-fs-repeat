const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawanNames = read.split('\n');
  return padawanNames;
}

function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8');
  const score = read.split('\n');
  return score.map((i) => Number(i));
}
function getStats() {
  const stats = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    stats.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return stats;
}
// console.log(getStats());
function writeStats() {
  const data = getStats().join('\n');
  fs.writeFileSync('data/stats.txt', data.replace(/,/g, ' '));
}

// writeStats();
