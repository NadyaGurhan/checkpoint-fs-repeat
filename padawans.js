const fs = require('fs');
const padawansLines = fs.readFileSync('./data/padawans.txt', 'utf8');
const scoresLines = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  const padawansNames = padawansLines.split('\n');
  return padawansNames.slice(0, padawansNames.length - 1);
}

function getLightsaberScores() {
  const saberScores = scoresLines.split('\n');
  return saberScores.map((number) => Number(number));
}

function getStats() {
  const stats = [getPadawanNames()[0], getLightsaberScores()[0]];
  return stats;
}

console.log(getStats());

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
