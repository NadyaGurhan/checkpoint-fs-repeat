const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').filter(el => el.length);
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').split('\n').filter(el => el.length).map(el => Number(el));
}

function getStats() {
  const name = getPadawanNames();
  const score = getLightsaberScores();
  return name.map((el, i) => [el, score[i]]);
}

function writeStats() {
  const str = getStats().join('\n').replace(/,/g, ' ');
  fs.writeFileSync('./data/stats.txt', str, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

