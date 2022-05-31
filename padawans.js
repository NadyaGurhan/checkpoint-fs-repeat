const fs = require('fs');

// возвращает список падаванов
function getPadawanNames() {
  const arr = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  arr.pop();
  return arr;
}

function getLightsaberScores() {
  const arr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    res.push(Number(arr[i]));
  }
  return res;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < names.length; i += 1) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
}

function writeStats() {
  const res = getStats();

  let str = '';
  for (let i = 0; i < res.length; i += 1) {
    str = str.concat(`${String(res[i])}\n`);
  }
  return fs.writeFileSync('./data/stats.txt', str, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
