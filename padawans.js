const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'UTF-8');
const scores = fs.readFileSync('./data/scores.txt', 'UTF-8');

function getPadawanNames() {
  const padawansArr = padawans.split('\n');

  const arr = [];

  for (let index = 0; index < padawansArr.length - 1; index++) {
    arr.push(padawansArr[index]);
  }
  return arr;
}

function getLightsaberScores() {
  const padawansArr = padawans.split('\n');
  const scoresArr = scores.split('\n');

  const arr = [];

  for (let index = 0; index < padawansArr.length - 1; index++) {
    // arr.push(padawansArr[index],scoresArr[index]);
    arr.push(+scoresArr[index]);
  }
  return arr;
}

function getStats() {
  const padawansArr = padawans.split('\n');
  const scoresArr = scores.split('\n');

  const arr = [];
  const arr2 = [];
  const arr3 = [];

  for (let index = 0; index < padawansArr.length - 1; index++) {
    arr.push(padawansArr[index]);
    arr2.push(+scoresArr[index]);
    arr3.concat(arr, arr2);

    // console.log(arr3)
  }
  return arr3;
}

function writeStats(arr3) {
  fs.appendFileSync('./data/stats.txt', `${arr3}\n`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
