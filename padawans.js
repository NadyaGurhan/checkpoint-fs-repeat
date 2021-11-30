const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  names.pop();
  return names;
}

function getLightsaberScores() {
  const swords = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const result = swords.map((el) => Number(el));
  return result;
}

function getStats() {
  const stats = [];
  for (let i = 0; i < getLightsaberScores().length; i += 1) {
    stats.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return stats;
}

function writeStats() {
  const textStats = getStats();
  const textStats2 = textStats.map((el) => el.join(' '));
  fs.writeFileSync('./data/stats.txt', textStats2.join('\n'), 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
