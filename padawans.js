const fs = require('fs');

function getPadawanNames() {
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return padawan.split('\n').slice(0, -1);
}
getPadawanNames();

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores.split('\n').map((el) => +el);
}

getLightsaberScores();

function getStats() {
  const first = getPadawanNames();
  const second = getLightsaberScores();
  const res = [];
  for (let i = 0; i < first.length; i += 1) {
    res.push([first[i], second[i]]);
  }
  return res;
}
getStats();

function writeStats() {
  const results = getStats();
  const res = results.map((el) => el.join(' '));

  return fs.writeFileSync('./data/stats.txt', res.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
