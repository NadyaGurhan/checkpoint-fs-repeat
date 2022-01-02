const fs = require('fs');

const filePath = './data/padawans.txt';
const padawans = fs.readFileSync(filePath, 'utf8').split('\n', 4);

const filePath2 = './data/scores.txt';
const scores = fs.readFileSync(filePath2, 'utf8').split('\n').map((el) => Number(el));

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores;
}

function getStats() {
  const arr = [];
  for (let i = 0; i < padawans.length; i++) {
    arr.push([padawans[i], scores[i]]);
  }
  return arr;
}

function writeStats(stats) {
  stats = getStats();
  return fs.writeFileSync('./data/stats.txt', stats.join('\n').replace(/,/g, ' '));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
