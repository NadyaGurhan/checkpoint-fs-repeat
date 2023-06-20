const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8');
  return names.split('/n')
  //.push();
}

function getLightsaberScores() {
  const names = fs.readFileSync('./data/scores.txt', 'utf8');
  return names.split('/n')
  //.push();
}

function getStats() {
  const stats = [];
  const names = fs.readFileSync('./data/padawans.txt', 'utf8');
  const scores = fs.readFileSync('./data/scores.txt', 'utf8');
  for (let i = 0; i < names.length; i += 1) {
    stats[i].push(names[i], scores[i]);
    stats.push(stats[i]);
  } return stats;
}

function writeStats() {
  const filePath = './data/stats.txt';
  const stats = getStats();
  fs.writeFileSync(filePath, stats);
}
