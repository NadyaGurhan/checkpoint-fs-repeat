const fs = require('fs');

const padawansStr = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scoresStr = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const padawansArr = padawansStr.split('\n');
  padawansArr.pop();
  return padawansArr;
}

function getLightsaberScores() {
  return scoresStr.split('\n').map((item) => +item);
}

function getStats() {
  const padawansArr = getPadawanNames();
  const scoresArr = getLightsaberScores();

  const resArr = [];

  padawansArr.forEach((el, i) => resArr.push([padawansArr[i], scoresArr[i]]));
  return resArr;
}

function writeStats() {
  return fs.writeFileSync('./data/stats.txt', `${getStats().map((item) => item.join(' ')).join('\n')}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
