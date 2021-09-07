const fs = require('fs');

function getPadawanNames() {
  const text = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padavans = text.trim().split('\n');
  return padavans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8');
  const sabers = scores.trim().split('\n').map(Number);
  return sabers;
}

function getStats() {
  const stats = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
