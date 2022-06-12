const fs = require('fs');
const padawans = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
const scores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');

padawans.pop();

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores.map((x) => Number(x));
}

function getStats() {
  const stats = [];
  for (let i = 0; i < padawans.length; i += 1) {
    const arr = [];

    arr.push(padawans[i]);
    arr.push(getLightsaberScores()[i]);
    stats.push(arr);
  }

  return stats;
}

function writeStats() {
  const stats = getStats();
  const stats1 = stats.map((x) => x.join(' '));

  fs.writeFileSync('data/stats.txt', stats1.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
