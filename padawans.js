const fs = require('fs');

const allPadawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const allPadawan = allPadawans.split('\n');

function getPadawanNames() {
  allPadawan.pop();
  return allPadawan;
}

const allScores = fs.readFileSync('./data/scores.txt', 'utf8');
const allScore = allScores.split('\n');

function getLightsaberScores() {
  return allScore.map((item) => Number(item));
}

function getStats() {
  let scores = allScore.map((item) => Number(item));
  let stats = [];
  for (let i = 0; i < allScore.length; i += 1) {
    stats[i] = [allPadawan[i], scores[i]];
  }
  return stats;
}

function writeStats() {
  let scores = allScore.map((item) => Number(item));
  let stats = [];
  for (let i = 0; i < allScore.length; i += 1) {
    stats[i] = [allPadawan[i], scores[i]];
    stats.join(' ');
  }
  for (let i = 0; i < stats.length; i += 1) {
    fs.appendFileSync('./data/stats.txt', `${stats[i]}\n`, 'utf-8');
  }
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
