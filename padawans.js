const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
const score = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
fs.writeFileSync('./data/stats.txt', '');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  const scores = score.map((el) => Number(el));
  return scores;
}

function getStats() {
  const stat = [];
  for (let i = 0; i < padawans.length; i += 1) {
    stat.push([padawans[i]]);
  }
  for (let i = 0; i < padawans.length; i += 1) {
    stat[i].push(Number(score[i]));
  }
  return stat;
}

function writeStats() {
  const data = getStats();
  for (let i = 0; i <= data.length; i += 1) {
    if (i === data.length - 1) return fs.appendFileSync('./data/stats.txt', `${data[i].join(' ')}`);
    fs.appendFileSync('./data/stats.txt', `${data[i].join(' ')}\n`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
