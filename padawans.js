const fs = require('fs');
const { loadavg } = require('os');
function getPadawanNames() {
  return  fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1); 
};

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').split('\n').filter((el) => el.length).map((el) => Number(el));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];

  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
}

function writeStats(arr) {
  fs.writeFileSync('./data/stats.txt', arr.map(el => el.join(' ')).join('\n'), 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
