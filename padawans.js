const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt', 'utf-8');
  return names.trim().split('\n');
}

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf-8');
  return scores.split('\n').map((elem) => Number(elem));
}

function getStats() {
  const stats = getLightsaberScores();
  const gettingStats = fs.writeFileSync('data/stats.txt', stats);
  return gettingStats;

}

function writeStats(stats) {
  const statsWrite = fs.writeFileSync('data/padawans.txt', stats);
  return statsWrite;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
