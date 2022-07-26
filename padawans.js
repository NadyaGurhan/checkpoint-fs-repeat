const fs = require('fs')
const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');

function getPadawanNames() {
  return padawans;
}

const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

function getLightsaberScores() {
  return scores.map((value) => +value);
}
const score = getLightsaberScores();

function getStats() {
  const stats = [];
  for (let i = 0; i < padawans.length; i++) {
    stats.push(padawans[i]);
  }
  return stats;
}
console.log(getStats())

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
