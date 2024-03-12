const fs = require('fs');

function getPadawanNames() {
  const arr = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  arr.splice(-1, 1);
  return arr;
}

function getLightsaberScores() {
  const arr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return arr.map((el) => Number(el));
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];

  for (let i = 0; i < padawans.length; i += 1) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
}

function writeStats() {
  const textStat = getStats().map((el) => el.join(' ')).join('\n');
  fs.writeFileSync(('./data/stats.txt'), textStat, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
