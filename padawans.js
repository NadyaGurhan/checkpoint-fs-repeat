const fs = require('fs');
const padawanNames = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split('\n');
const padawanScores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
 return padawanNames;
}
function getLightsaberScores() {
  const scores = padawanScores.map((score) => Number(score));
  return scores;
}
function getStats() {
  const stats = [];
  for (let i = 0; i < padawanNames.length; i += 1) {
    stats.push([padawanNames[i], Number(padawanScores[i])]);
  }
  return stats;
}
function writeStats() {
  let stats = getStats().map((stat) => stat.join(' '));
  const textData = stats.join('\n');
  fs.writeFileSync('data/stats.txt', textData, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
