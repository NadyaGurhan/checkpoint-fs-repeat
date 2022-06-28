const fs = require('fs');

function getPadawanNames() {
  const str = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return str.split('\n');
}

function getLightsaberScores() {
  const str = fs.readFileSync('./data/scores.txt', 'utf-8');
  let arr = str.split('\n');
  arr = arr.map((i) => Number(i));
  return arr;
}

function getStats() {
  const arr1 = getPadawanNames();
  const arr2 = getLightsaberScores();
  const zero = [];
  const one = [];
  const two = [];
  const three = [];

  zero.push(arr1[0]);
  zero.push(arr2[0]);

  one.push(arr1[1]);
  one.push(arr2[1]);

  two.push(arr1[2]);
  two.push(arr2[2]);

  three.push(arr1[3]);
  three.push(arr2[3]);

  const res = zero.concat(one, two, three);
  return res;
}

console.log(getStats());

function writeStats() {
  return fs.writeFile('./data/stats.txt', `${getStats()}`, (error) => {
    error ? console.log(error) : null;
  });
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
