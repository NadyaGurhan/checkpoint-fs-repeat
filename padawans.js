const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('/home/powerck/elbrus/p1w1d1/checkpoint/checkpoint-fs/data/padawans.txt', 'utf-8').split('\n');
  return names;
}
function getPadawanScores() {
  const scores = fs.readFileSync('/home/powerck/elbrus/p1w1d1/checkpoint/checkpoint-fs/data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  return scores;
}
function getLightsaberScores() {
  return getPadawanScores();
}

function getStats() {
  const stats = [];
  const names = fs.readFileSync('/home/powerck/elbrus/p1w1d1/checkpoint/checkpoint-fs/data/padawans.txt', 'utf-8').split('\n');
  const scores = fs.readFileSync('/home/powerck/elbrus/p1w1d1/checkpoint/checkpoint-fs/data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  for (let i = 0; i < names.length; i++) {
    const arr = new Array(`${names[i]}, ${scores[i]}`);
    stats.push(arr);
  }
  return stats;
}

function writeStats() {
  fs.writeFileSync('/home/powerck/elbrus/p1w1d1/checkpoint/checkpoint-fs/data/stats.txt', getStats().join('\n'), 'utf-8');
}
writeStats();
module.exports = {
  getPadawanNames,
  getPadawanScores,
  getLightsaberScores,
  getStats,
  writeStats,
};
