const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  const names = data.split('\n').filter((name) => name.trim() !== '');
  return names;
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8'); 
  const scores = data.split('\n').filter((score) => score.trim() !== '');
  return scores;
}

function getStats() {
  const padawanNames = getPadawanNames();
  const lightsaberScores = getLightsaberScores();
  const stats = [];

  for (let i = 0; i < padawanNames.length; i += 1) {
    const name = padawanNames[i];
    const score = parseFloat(lightsaberScores[i]);
    stats.push([name, score]);
  }
  return stats;
}

function writeStats(stats) {
  let data = '';

  fs.writeFileSync('data/stats.txt', 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
