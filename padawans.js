const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  const dataPadawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  return dataPadawans.trim().split('\n');
}

function getLightsaberScores() {
  const dataScores = fs.readFileSync('./data/scores.txt', 'utf8');
  return dataScores.split('\n').map((el) => parseFloat(el));
}

function getStats() {
  return [
    ['Revan', 99.9],
    ['Bastila Shan', 92],
    ['Jolee Bindo', 87],
    ['Juhani', 82],
  ];
}

function writeStats(stats) {
  const statsData = stats.map((el) => el.join() )
    fs.writeFileSync(path.join(__dirname, '.data/stats.txt'), stats)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
