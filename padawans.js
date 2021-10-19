const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  return padawans.trim().split('\n');
}

function getLightsaberScores() {
  return scores.trim().split('\n').map((el) => +el);
}

function getStats() {
  const res = [];
  const a = getPadawanNames();
  const b = getLightsaberScores();
  for (let i = 0; i < a.length; i += 1) {
    res.push([a[i], b[i]]);
  }
  return res;
}

function writeStats() {
  const stats = getStats();
  fs.writeFileSync('./data/stats.txt', stats.join('\n').replace(/,/g, ' '));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
