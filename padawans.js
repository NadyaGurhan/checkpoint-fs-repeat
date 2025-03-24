const fs = require('fs');

function getPadawanNames() {
  const fileData = fs.readFileSync('data/padawans.txt', 'utf-8');
  return fileData.split('\r\n').filter((el) => el.trim() !== '');
}

function getLightsaberScores() {
  const fileData = fs.readFileSync('data/scores.txt', 'utf-8');
  return fileData
    .split('\r\n')
    .filter((el) => el.trim() !== '')
    .map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const score = getLightsaberScores();

  return names.map((name, i) => [name, score[i]]);
}

function writeStats() {
  const stats = getStats();
  return fs.writeFileSync('data/stats.txt', stats.join('\n').replaceAll(',', ' '));
}

console.log(getPadawanNames());
getLightsaberScores();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
