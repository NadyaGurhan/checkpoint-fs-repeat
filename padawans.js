const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawans.trim().split('\n');
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores.split('\n').map((score) => Number(score));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();

  const result = [];
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], Number(scores[i])]);
  }
  return result;
}

function writeStats(stats) {
  const result = stats.join('\n').replaceAll(',', ' ');
  fs.writeFileSync('data/stats.txt', result);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
