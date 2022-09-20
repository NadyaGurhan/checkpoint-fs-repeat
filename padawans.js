const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const padawans = fs.readFileSync('data/padawans.txt', 'utf8').split('\n');
  delete padawans[4];
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf8')
    .split('\n');
  for (let i = 0; i < scores.length; i += 1) {
    scores[i] = Number(scores[i]);
  }
  return scores;
}

function getStats() {
  const arrStats = [];
  for (let i = 0; i < 4; i += 1) {
    arrStats.push(getPadawanNames());
    arrStats.push(getLightsaberScores());
    for (let k = 0; k < arrStats; k += 1) {
      delete arrStats[i][k];
    }
  }
  return arrStats;
}
getStats();
// console.log(scores)

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  //   writeStats,
};
