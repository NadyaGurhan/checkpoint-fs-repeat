const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  return (padawans.slice([0], [-1]));
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  return score.map(Number);
}

function getStats() {
  const padawans = getPadawanNames();
  const score = getLightsaberScores();
  const stats = [];

  for (let i = 0; i < padawans.length; i++) {
    const currentPadawan = [padawans[i], score[i]];
    stats.push(currentPadawan);
  }
  return stats;
}

function writeStats() {
  const stats = getStats().map((el) => el.join(' ')).join('\n');
  return fs.writeFileSync('./data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
