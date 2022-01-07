const fs = require('fs');

const padawansNames = fs.readFileSync('data/padawans.txt', 'utf-8').trim().split('\n');
const padawansScores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  return padawansNames;
}
getPadawanNames();

function getLightsaberScores() {
  const scores = padawansScores.map((score) => Number(score));
  return scores;
}
getLightsaberScores();

function getStats() {
  const stats = [];
  for (let i = 0; i < padawansNames.length; i += 1) {
    stats.push([padawansNames[i], Number(padawansScores[i])])
  }
  return stats;
}
getStats();

function writeStats() {
  let stats = getStats().map((stat) => stat.join(' '));
  const textData = stats.join('\n');
  fs.writeFileSync('data/stats.txt', textData, 'utf8');
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
