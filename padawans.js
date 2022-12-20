const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return names;
}

function getLightsaberScores() {
  const names = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
  return names.map(index => Number(index));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  let stats = []
  let i = 0;
  while (names[i] && scores[i]) {
    stats.push([names[i], scores[i]]);
    i += 1;
  } 
  return stats;
}

function writeStats() {
  let stats = getStats();
  const data = fs.writeFileSync('./data/stats.txt', stats.map(index => index.join(' ')).join('\n'));
}