const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8').split('\n').filter(Boolean);
}

function getLightsaberScores() {
  return fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').split('\n').filter(Boolean).map(Number);
}

function getStats() {
  const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8').split('\n').filter(Boolean);
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').split('\n').filter(Boolean).map(Number);

  const stats = [];
  for (let i = 0; i < padawans.length; i += 1) {
    const padawan = padawans[i];
    const score = scores[i];

    stats.push([padawan, score]);
  }

  return stats;
}

function writeStats(stats) {
  for (let i = 0; i < stats.length; i += 1) {
    const el = stats[i].join(' ');

    if (i === stats.length - 1) {
      fs.appendFileSync('./data/stats.txt', `${el}`);
    } else {
      fs.appendFileSync('./data/stats.txt', `${el}\n`);
    }
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
