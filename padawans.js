const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, 4);
  return names;
}

function getLightsaberScores() {
  const names = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return names.map((el) => +el);
}
function getStats() {
  const stats = [];
  const names1 = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => +el);

  const names2 = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, 4);
  stats.push([names2[0], names1[0]], [names2[1], names1[1]], [names2[2], names1[2]], [names2[3], names1[3]]);
  return stats;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
