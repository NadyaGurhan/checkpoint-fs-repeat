const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return padawanNames;
}

function getLightsaberScores() {
  const score = [];
  const saberScore = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  saberScore.map((el) => score.push(Number(el)));
  return score;
}

function getStats() {
  const stats = [];
  const padNames = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  const lightSaber = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < padNames.length; i++) {
    stats.push([padNames[i], Number(lightSaber[i])]);
  }
  return stats;
}

function writeStats(stats) {
  const getStats = stats.join('\n').replaceAll(',', ' ');
  fs.writeFileSync('./data/stats.txt', getStats);
}
