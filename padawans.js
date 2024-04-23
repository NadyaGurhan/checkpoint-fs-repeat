const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
  return names;
}

function getLightsaberScores() {
  newArr = [];
  const names = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  names.map((el) => newArr.push(Number(el)));
  return newArr;
}
function getStats() {
  const stats = [];
  const names = fs.readFileSync('./data/padawans.txt', 'utf8').trim().split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  for (let i = 0; i < names.length; i += 1) {
    stats.push([names[i], Number(scores[i])]); // потом принять функции
  }
  return stats;
}
function writeStats(stats) {
  const data = stats.join('\n').replaceAll(',', ' ');
  return fs.writeFileSync('data/stats.txt', data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
