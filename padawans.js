const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  return fs.readFileSync(path.join(__dirname, 'data', 'padawans.txt'), 'utf-8').trim().split('\n');
}

function getLightsaberScores() {
  return fs.readFileSync(path.join(__dirname, 'data', 'scores.txt'), 'utf-8').trim().split('\n').map((el) => +el);
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];

  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], scores[i]]);
  } return result;
}

function writeStats() {
  const textStat = getStats().map((el) => el.join(' ')).join('\n');
  fs.writeFileSync(path.join(__dirname, 'data', 'stats.txt'), textStat, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
