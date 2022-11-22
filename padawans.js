const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const padawan = fs.readFileSync('/data/padawans.txt', 'utf-8');
const score = fs.readFileSync('/data/scores.txt', 'utf-8');

function getPadawanNames() {
  return padawan.split('/n').slice(0, -1);
}
function getLightsaberScores() {
  return score.split('/n').slice(0, -1);
}
function getStats() {
  const stats = Array.from({ length: padawan.length }, () => []);

  for (let i = 0; i < padawan.length; i += 1) {
    stats[i].push(padawan[i]);
    stats[i].push(score[i]);
  }

  return stats;
}
