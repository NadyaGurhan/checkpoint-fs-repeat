const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  return fs.readFileSync(path.join(__dirname, './data/padawans.txt'), 'utf-8').split('\n');
}

function getLightsaberScores() {
  const res = fs.readFileSync(path.join(__dirname, './data/scores.txt'), 'utf-8').split('\n');
  return res.map((el) => +el);
}

function getStats() {
  const res = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < names.length; i++) {
    res.push([names[i], scores[i]]);
  }
  return res;
}

function writeStats() {
  return fs.writeFileSync(path.join(__dirname, './data/stats.txt'), `${getStats().join('\n').split(',').join(' ')}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
