const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
  names.pop();
  return `${names}`;
}

function getLightsaberScores() {
  const res = fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n');
  return `${res}`;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = padawans.map((el, i) => [el, scores[i]]);
  return stats;
}

function writeStats() {
  const stats = getStats();
  for (let i = 0; i < stats.length; i++) {
    fs.writeFileSync('./data/stats.txt', `${stats[i]}\n`);
  }
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
