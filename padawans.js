const fs = require('fs');
const { resourceUsage } = require('process');

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawansTrim = padawanNames.trim();
  return padawansTrim.split('\n');
}

function getLightsaberScores() {
  let result = [];
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf8');
  const lightsaberScoresSplit = lightsaberScores.split('\n');
  return lightsaberScoresSplit.map((el) => Number(el));
}

function getStats() {
  let result = [];
  const padawanNames = getPadawanNames();
  const lightsaberScores = getLightsaberScores();
  for (let i = 0; i < padawanNames.length; i++) {
    result.push(`${padawanNames[i]}`, lightsaberScores[i])
  }
  console.log(result);
}
getStats()

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats
};
