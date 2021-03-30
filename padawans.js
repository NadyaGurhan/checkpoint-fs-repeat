const fs = require('fs');

const data = fs.readFileSync('data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('data/scores.txt', 'utf-8');

function getPadawanNames() {
  const data1 = data.trim().split('\n');
  const arr = [];
  for (let i = 0; i < data1.length; i++) {
    arr.push(data1[i]);
  }
  return arr;
}

function getLightsaberScores() {
  const scores1 = scores.trim().split('\n');
  const arr = [];
  for (let i = 0; i < scores1.length; i++) {
    arr.push(Number(scores1[i]));
  }
  return arr;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], scores[i]]);
  }
  return arr;
}

function writeStats() {
  const result = getStats().join('\n');
  const x = result.replace(/[,]/g, ' ');
  fs.writeFileSync('data/stats.txt', x);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
