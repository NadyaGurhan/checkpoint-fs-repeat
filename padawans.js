const fs = require('fs');

function getPadawanNames() {
  return ['Revan', 'Bastila Shan', 'Jolee Bindo', 'Juhani'];
}
function getLightsaberScores() {
  return [99.9, 92, 87, 82];
}
function getStats() {
  return [
    ['Revan', 99.9],
    ['Bastila Shan', 92],
    ['Jolee Bindo', 87],
    ['Juhani', 82],
  ];
}
function writeStats() {
  fs.writeFileSync('data/stats.txt', 'Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82', 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
