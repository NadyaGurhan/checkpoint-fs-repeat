const fs = require('fs');

function getPadawanNames() {
  const readName = fs.readFileSync('data/padawans.txt', 'utf-8');
  return readName.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  const readScore = fs.readFileSync('data/scores.txt', 'utf-8');
  return readScore.split('\n').map((elem) => Number(elem));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((padawanName, i) => [padawanName, scores[i]]);
}

function writeStats(filename, arr) {
  const stats = getStats().join('\n').split(',').join(' ');
  const toNewTxt = fs.writeFileSync('data/stats.txt', stats);
  return toNewTxt;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
