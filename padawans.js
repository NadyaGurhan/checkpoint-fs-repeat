const fs = require('fs');

function getPadawanNames() {
  const str = fs.readFileSync('data/padawans.txt', 'utf8');
  const arr = str.split('\n');
  arr.splice(arr.length - 1, 1);
  return arr;
}

function getLightsaberScores() {
  const str = fs.readFileSync('data/scores.txt', 'utf8');
  const arr = str.split('\n');
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 1;
  }
  return arr;
}

function getStats() {
  const arr1 = getPadawanNames();
  const arr2 = getLightsaberScores();
  const arr = [];
  for (let i = 0; i < arr1.length; i++) {
    let str = 0;
    str = `${arr1[i]};${arr2[i]}`;
    arr[i] = str.split(';');
    arr[i][1] *= 1;
  }
  return arr;
}

function writeStats() {
  const arr = getStats();
  for (let i = 0; i < arr.length; i++) {
    fs.appendFileSync('data/stats.txt', `${arr[i][0]} ${arr[i][1]}`);
    if (i < arr.length - 1) { fs.appendFileSync('data/stats.txt', '\n'); }
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
