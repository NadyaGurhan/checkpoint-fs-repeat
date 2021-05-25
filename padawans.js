const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const stats = getLightsaberScores();
  const newStats = [];
  for (let i = 0; i < names.length; i++) {
    newStats.push([names[i], stats[i]]);
  }
  return newStats;
}

function writeStats() {
  if (fs.existsSync('./data/stats.txt')) {
    fs.unlinkSync('./data/stats.txt');
  }
  const newStats = getStats();
  const newData = newStats.join('\n').split(',').join(' ');
  fs.appendFileSync('./data/stats.txt', newData, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
