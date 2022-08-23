const fs = require('fs');

const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');

const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getPadawanNames() {
  const arr = [];
  for (let i = 0; i <= names.length; i++) {
    arr.push(names[i]);
  }
  return arr;
}

function getLightsaberScores() {
  const arr = [];
  for (let i = 0; i < scores.length; i++) {
    arr.push(+scores[i]);
  }
  return arr;
}

function getStats() {
  const arr = [];
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i],+scores[i]]);
  }
  return arr;
}

function writeStats() {
  const stats = getStats();
  let result = stats.join('\n').split(',').join(' ');
  fs.writeFileSync('./data/stats.txt', result, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
