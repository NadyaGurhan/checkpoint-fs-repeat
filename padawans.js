const fs = require('fs');
const path = require('path');

function readFile(filename) {
  return fs
    .readFileSync(path.join(__dirname, filename), 'utf8')
    .trim()
    .split('\n');
}

function writeFile(filename, data) {
  return fs.writeFileSync(path.join(__dirname, filename), data, 'utf8');
}

function getPadawanNames() {
  return readFile('data/padawans.txt');
}

function getLightsaberScores() {
  return readFile('data/scores.txt').map(Number);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i++) {
    padawans[i] = [padawans[i], scores[i]];
  }
  return padawans;
}

function writeStats() {
  let padawans = getStats();
  let formattedStats = '';
  for (let i = 0; i < padawans.length; i++) {
    formattedStats += padawans[i][0] + ' ' + padawans[i][1] + '\n';
  }

  writeFile('data/stats.txt', formattedStats.trim());
}

console.log(getPadawanNames());
console.log(getLightsaberScores());
console.log(getStats());
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
