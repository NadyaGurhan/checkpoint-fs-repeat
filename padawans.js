const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');
function getPadawanNames() {
  const result = padawans.split('\n');
  return result.slice(0, result.length - 1);
}
function getLightsaberScores() {
  const arr = scores.split('\n');
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(+arr[i]);
  }
  return result;
}
function getStats() {
  const arrPadawans = getPadawanNames();
  const arrScores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < arrPadawans.length; i += 1) {
    result.push([arrPadawans[i], arrScores[i]]);
  }
  return result;
}
const stats = getStats().join('\n').split(',').join(' ');
function writeStats() {
  fs.writeFileSync('./data/stats.txt', stats);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
