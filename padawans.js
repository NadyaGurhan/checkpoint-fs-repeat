const fs = require('fs');
function getPadawanNames() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  names.pop();
  return names;
}

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  scores = scores.split('\n');
  return scores.map(el => Number(el));
}

function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let stats = [];
  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
}

function writeStats() {
  let stats = getStats();
  stats = stats.map(el => el.join(' '));
  fs.appendFileSync('./data/stats.txt', stats.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
