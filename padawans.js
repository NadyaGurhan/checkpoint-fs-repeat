const fs = require('fs');
const { get } = require('http');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawanNames.split('\n');
}

function getLightsaberScores() {
  const lightSaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const final = lightSaberScores.map((i) => +i);
  return final;
}
function getStats() {
  const padawanNames = getPadawanNames();
  const lightSaberScores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < padawanNames.length; i++) {
    stats.push([padawanNames[i],lightSaberScores[i]]);
  }
  return stats;
}
function writeStats() {}
