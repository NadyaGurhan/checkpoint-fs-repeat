const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}

function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .trim()
    .split('\n')
    .map((score) => Number.parseFloat(score));
}

function getStats() {
  const padawans = getPadawanNames();
  const scorse = getLightsaberScores();

  return padawans.map((padawan, index) => [padawan, scorse[index]]);
}

function writeStats() {
  const stats = getStats();
  stats.forEach((record, index) => (index === 0 ? fs.appendFileSync('./data/stats.txt', `${record.join(' ')}`)
    : fs.appendFileSync('./data/stats.txt', `\n${record.join(' ')}`)));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
