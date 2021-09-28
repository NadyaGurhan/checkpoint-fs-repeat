const { formatWithOptions } = require('util');

function readFile(path) {
  const fs = require('fs');
  const data = fs.readFileSync(path, 'utf8');
  return data.trim().split('\n');
}

function writeStats(data) {
  const fs = require('fs');
  const changedData = data
    .map((padawan) => padawan.join(' '))
    .join('\n');
  fs.writeFileSync('data/stats.txt', changedData);
}

function getPadawanNames() {
  return readFile('data/padawans.txt');
}

function getLightsaberScores() {
  return readFile('data/scores.txt').map((score) => Number(score));
}

function getStats() {
  const scores = readFile('data/scores.txt');
  const padawans = readFile('data/padawans.txt');
  const stats = padawans.map((padawan, i) => [padawan, Number(scores[i])]);
  const path = 'data/stats.txt';
  writeStats(stats);
  return stats;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
