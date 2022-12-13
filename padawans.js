const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
function getPadawanNames() {
  const array = padawans.trim().split('\n');
  return array;
}

function getLightsaberScores() {
  const array = scores.trim().split('\n');
  // array.forEach((el) => Number(el));
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }
  return array;
}

function getStats() {
  const result = [];
  const arr1 = padawans.trim().split('\n');
  const arr2 = scores.trim().split('\n');
  for (let i = 0; i < arr1.length; i++) {
    const padawan = [];
    padawan.push(arr1[i]);
    padawan.push(Number(arr2[i]));
    result.push(padawan);
  }
  return result;
}

function writeStats(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].join(' ');
  }
  fs.writeFileSync('./data/stats.txt', `${array.join('\n')}`);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
