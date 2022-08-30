const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').trim().split('\n').map((el) => Number(el));
}

function getStats() {
  const pada = getPadawanNames();
  const scores = getLightsaberScores();
  const arr = [];

  for (let i = 0; i < pada.length; i += 1)
    arr[i] = [pada[i], scores[i]];
  return arr;
}

function writeStats() {
  fs.appendFileSync('./data/stats.txt', getStats().map((el) => el.join(' ')).join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
