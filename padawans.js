const fs = require("fs");

function getPadawanNames() {
  return ['.data/padawans.txt'];
}

function getLightsaberScores() {
  return ['.data/scores.txt'];
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
  const filePutContents = ('data/stats.txt', 'Revan 99.9\nBastila Shan 92\nJolee Bindo 87\nJuhani 82');
  return filePutContents;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
