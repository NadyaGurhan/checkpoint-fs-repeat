const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawanNames.trim().split('\n');
}

function getLightsaberScores() {
  return scores.split('\n').map((el) => Number(el));
}

function getStats() {
  const padNames = getPadawanNames();
  const scoresPad = getLightsaberScores();
  const statsPad = [];
  for (let i = 0; i < padNames.length; i += 1) {
    const stats = [];
    stats.push(padNames[i]);
    stats.push(scoresPad[i]);
    statsPad.push(stats);
  }
  return statsPad;
}

function writeStats() {
  const stats = getStats().join('\n').split(',').join(' ');
  console.log(stats);
  const data = fs.writeFileSync('data/stats.txt', stats, 'utf-8');
}
