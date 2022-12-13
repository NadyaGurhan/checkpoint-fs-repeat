const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8');
  return names.split('\n')
    .map((i) => i.slice(0, -1))
    .slice(0, -1);
}

function getLightsaberScores() {
  const lightsaberScore = fs.readFileSync('./data/scores.txt', 'utf8');
  return lightsaberScore.split('\n')
    .map((i) => Number(i));
}

function getStats() {
  const namesArr = getPadawanNames();
  const lightsaberScoreArr = getLightsaberScores();
  const arr = [];
  for (let i = 0; i < namesArr.length; i += 1) {
    arr.push([namesArr[i], lightsaberScoreArr[i]]);
  }
  return arr;
}

function writeStats() {
  const arrStar = getStats();
  const arrMap = arrStar.map((i) => i.join(' '));
  return fs.writeFileSync('./data/stats.txt', arrMap.join('\n'));
}

module.exports = {
  writeStats,
  getPadawanNames,
  getLightsaberScores,
  getStats,
};
