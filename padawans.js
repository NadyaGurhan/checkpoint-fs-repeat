const fs = require('fs');

function getPadawanNames() {
  const info = fs.readFileSync('data/padawans.txt', 'utf-8');
  return info.split('\n');
}

// getPadawanNames();

function getLightsaberScores() {
  const info = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  return info.map((el) => el * 1);
  // очень тупо преобразовал, но через Number() не выходило
}

function getStats() {
  const namesArr = getPadawanNames();
  const scoresArr = getLightsaberScores();
  const getStatsArr = [];
  for (i = 0; i < scoresArr.length; i++) {
    getStatsArr.push([namesArr[i], scoresArr[i]]);
  }
  return getStatsArr;
}

function writeStats() {
  const arrToMutate = getStats().map((el) => el.join(''));
  fs.writeFileSync('./data/stats.txt', arrToMutate.join('\n'), 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
