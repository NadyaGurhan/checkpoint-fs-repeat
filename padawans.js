const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
}

function getLightsaberScores() {
  return fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((elem) => +elem);
}

function getStats() {
  const lightSaberScoresArr = getLightsaberScores();
  const padawansArr = getPadawanNames();
  const resArr = [];
  for (let i = 0; i < padawansArr.length; i++) {
    resArr.push([padawansArr[i], lightSaberScoresArr[i]]);
  }
  return resArr;
}

function writeStats(stats) {
  fs.writeFileSync('data/stats.txt', stats.map((elem) => elem.join(' ')).join('\n'), 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
