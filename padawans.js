const fs = require('fs');
const { get } = require('http');

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf8');
  return read.trim().split('\n');
}

getPadawanNames();

function getLightsaberScores() {
  const readStat = fs.readFileSync('./data/scores.txt', 'utf8');
  return readStat.trim().split('\n').map((el) => +el);
}

getLightsaberScores();

function getStats() {
  const res = [];
  const names = getPadawanNames();
  const stat = getLightsaberScores();
  for (let i = 0; i < names.length; i++) {
    res.push([names[i], stat[i]]);
  }
  return res;
}

getStats();

function writeStats() {
  const wirteStat = fs.writeFileSync('./data/stats.txt', `${getStats().join('\n')}`, 'utf8');
  return wirteStat;
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
