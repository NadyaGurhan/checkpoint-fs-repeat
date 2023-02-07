const fs = require('fs');

function getPadawanNames() {
  return fs
    .readFileSync(__dirname + '/data/padawans.txt', 'utf8')
    .split('\r\n');
}

function getLightsaberScores() {
  return fs
    .readFileSync(__dirname + '/data/scores.txt', 'utf8')
    .split('\r\n')
    .map((el) => +el);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const res = [];
  for (ind in names) {
    res.push([names[ind], scores[ind]]);
  }

  return res;
}

function writeStats() {
  let res = getStats().map((el) => el.join(' '));
  fs.writeFileSync(__dirname + '/data/stats.txt', res.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
