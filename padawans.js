const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
//   writeStats,
};

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').toString().split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').toString().split('\n');

console.log(padawans);

function getPadawanNames(arr = padawans) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') output.push(arr[i]);
  }
  return output;
}
// console.log(scores);

function getLightsaberScores(arr = scores) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') output.push(Number(arr[i]));
  }
  return output;
}

// console.log(tab);

function getStats(arr1 = padawans, arr2 = scores) {
  const output = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      output.push(arr1[i], arr2[j]);
    }
  }
  return output;
}

console.log(getStats());
