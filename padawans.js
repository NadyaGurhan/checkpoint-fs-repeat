const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8').trim().split('\n');
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').trim().split('\n').map((el) => Number(el));
  return scores;
}

function getStats() {
  const scores = getLightsaberScores();
  const padawans = getPadawanNames();
  const stats = [];

  for (let i = 0; i < padawans.length; i += 1) {
    const padawanScore = [];
    padawanScore.push(padawans[i], scores[i]);
    stats.push(padawanScore);
  }

  return stats;
}

function writeStats() {
  const stats = getStats();
  let dataStr = '';

  for (let i = 0; i < stats.length; i += 1) {
    dataStr += `${stats[i].join(' ')}`;

    if (i !== stats.length - 1) {
      dataStr += '\n';
    }
  }

  fs.writeFileSync(`${__dirname}/data/stats.txt`, dataStr);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
