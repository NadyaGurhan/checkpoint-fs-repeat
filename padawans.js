const fs = require('fs');

function getPadawanNames() {
  const padawanNames = Array(fs.readFileSync('data/padawans.txt', 'utf8'));

  const result = [];

  for (let i = 0; i < padawanNames.length; i += 1) {
    result.push(padawanNames[i]);
  }
  return result;
}

function getLightsaberScores() {
  const lightsaberScores = Array(fs.readFileSync('data/scores.txt', 'utf8'));

  const result = [];
  for (let i = 0; i < lightsaberScores.length; i += 1) {
    result.push(lightsaberScores[i]);
  }

  return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
