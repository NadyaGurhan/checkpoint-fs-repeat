const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return names;
}
function getPadawanScores() {
  const stats = fs.readFileSync('data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  return stats;
}
function getStats() {
  const arr = [];
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  const stats = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  arr.push(names, stats);
  return arr;
}
function writeStats() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  const data = fs.writeFileSync('./data/stats.txt', names);
  return data
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
