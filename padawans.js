const fs = require('fs');
const { get } = require('http');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');

function getPadawanNames() {
  return padawans;
}
getPadawanNames();
function getLightsaberScores() {
  return scores
    .map((el) => Number(el));
}
getLightsaberScores();

const stats = [];

function getStats() {
  for (let i = 0; i < scores.length; i += 1) {
    stats[i] = [padawans[i], Number(scores[i])];
  }
  return stats;
}
console.log(getStats());

function writeStats() {
  return fs.writeFileSync('./data/stats.txt', stats.map((el) => el.join(' ')).join('\n'));
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
