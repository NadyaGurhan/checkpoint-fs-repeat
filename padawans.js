const fs = require('fs')
const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames(str) {
  let a = str.split('\n');
  a.pop();
  return a;
};

function getLightsaberScores(str) {
  return str.split('\n').map((e) => Number(e));
}

function getStats(arr1, arr2) {
  let res = [];
  let z = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1.slice(i, i + 1));
    res.push(arr2.slice(i, i + 1));
  }
  // eslint-disable-next-line no-plusplus
  for (let j = 0; j <= res.length; j++) {
    z.push(res.slice(j, j + 2));
    z.flat();
  }
  return z.map((e) => e.flat());
}

console.log(getStats(getPadawanNames(padawans), getLightsaberScores(scores)));
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
