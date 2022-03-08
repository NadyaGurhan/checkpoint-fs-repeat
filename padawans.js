const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map((e) => Number(e));
  return scores;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], scores[i]]);
  }
  return stats;
}

function writeStats() {
  const stats = getStats();
  for (let i = 0; i < stats.length; i += 1) {
    if (i === stats.length - 1) {
      fs.appendFileSync('data/stats.txt', `${stats[i].join(' ')}`);
    } else fs.appendFileSync('data/stats.txt', `${stats[i].join(' ')}\n`);
  }
  console.log(stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
