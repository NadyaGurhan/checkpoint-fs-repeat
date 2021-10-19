const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const swords = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const arr = padawans.split('\n');
  arr.pop();
  return arr;
}

function getLightsaberScores() {
  const arr2 = swords.split('\n');
  for (let i = 0; i < arr2.length; i += 1) {
    arr2[i] = +arr2[i];
  }
  return arr2;
}

function getStats() {
  const arr = getPadawanNames();
  const arr2 = getLightsaberScores();
  const arrResult = [];

  for (let i = 0; i < arr.length; i += 1) {
    arrResult[i] = [arr[i], arr2[i]];
  }
  return arrResult;
}

function writeStats() {
  let arr = getStats();
  let str = [];
  for (let i = 0; i < arr.length; i += 1) {
    str[i] = arr[i].join(' ');
  }

  let strResult = str.join('\n');
  fs.writeFileSync('data/stats.txt', strResult);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
