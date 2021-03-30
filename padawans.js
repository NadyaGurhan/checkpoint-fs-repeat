const fs = require('fs');

function getPadawanNames(filename = './data/padawans.txt') {
  const str = fs.readFileSync(filename, 'utf-8');
  // console.log(str);
  const arr = str.split('\n');
  // console.log(arr);
  arr.pop();
  return arr;
} getPadawanNames();

function getLightsaberScores(filename = './data/scores.txt') {
  const scores = fs.readFileSync(filename, 'utf-8');
  // console.log(scores);
  const arr = scores.split('\n');
  // console.log(arr);
  return arr.map(Number);
} getLightsaberScores();

function getStats() {
  const result = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < 4; i++) {
    result.push([names[i], scores[i]]);
  }
  // console.log(result);
  return result;
} getStats();

function writeStats() {
  const stats = getStats().join('\n');
  // console.log(stats);
  let reg = stats.replace(/[,]/g, ' ');
  // console.log(reg);
  fs.writeFileSync('data/stats.txt', reg);
} writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
