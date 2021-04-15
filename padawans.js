const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8');
  return data.split('\n').filter((padawan) => padawan !== '');
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf-8');
  return data.split('\n').filter((score) => score !== '').map((score) => Number(score));
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  return Array.from({ length: padawans.length }, (v, i) => [padawans[i], scores[i]]);
}

function writeStats(stats) {
  let buffer = '';

  for (const stat of stats) {
    buffer += `${stat[0]} ${stat[1]}`;
    if (stat != stats[stats.length - 1]) {
      buffer += '\n';
    }
  }
  fs.writeFileSync('data/stats.txt', buffer);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
