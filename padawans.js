const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores.map((s) => +s);
}

function getStats() {
  return padawans.map((value, index) => [value, +scores[index]]);
}

function writeStats() {
  const stats = getStats().reduce((result, current) => result += `${current[0]} ${current[1]}\n`, '').slice(0, -1);
  fs.writeFileSync('./data/stats.txt', stats);
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
