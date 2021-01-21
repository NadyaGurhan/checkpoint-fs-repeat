const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').filter(el => el.length);
}

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf8').split('\n').filter(el => el.length).map(el => Number(el));
}

function getStats() {
  const obj = {};
  const name = getPadawanNames();
  const score = getLightsaberScores();
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = score[i];
  }
  return Object.entries(obj);
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

