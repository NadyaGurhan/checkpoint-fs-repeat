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

  // Альтернативное решение
  const stats1 = new Array(padawans.length).fill().map((_, i) => ([padawans[i], scores[i]]));

  for (let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], scores[i]]);
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
