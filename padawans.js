const fs = require('fs');
const path = require('path');

function readDataFromFile(fileName) {
  const filePath = path.join(__dirname, './data', fileName);
  const data = fs.readFileSync(filePath, 'utf-8');
  return data.split('\n');
}

function getPadawanNames() {
  const padawans = readDataFromFile('padawans.txt').slice(0, -1);
  return padawans;
}

function getLightsaberScores() {
  const scores = readDataFromFile('scores.txt').map(Number);
  return scores;
}

function getStats() {
  const stats = [];

  const padawans = readDataFromFile('padawans.txt').slice(0, -1);
  const scores = readDataFromFile('scores.txt').map(Number);

  for (let i = 0; i < padawans.length; i += 1) {
    stats.push([padawans[i], scores[i]]);
  }

  return stats;
}

function writeStats() {
  const stats = getStats().join('\n').toString().replace(/,/g, ' ');
  fs.writeFileSync('./data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
