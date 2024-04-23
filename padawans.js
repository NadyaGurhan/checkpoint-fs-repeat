const fs = require('fs');

const padawansTxt = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
const scoresTxt = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');

function getPadawanNames() {
  const arr = padawansTxt.trim().split('\n');
  return arr;
}

function getLightsaberScores() {
  const array = [];
  const arr = scoresTxt.trim().split('\n');
  for (let i = 0; i < arr.length; i ++) {
    array.push(Number(arr[i]));
  }
  return array;
}

function getStats () {
  const array = [];
  const arr1 = padawansTxt.trim().split('\n');
  const arr2 = scoresTxt.trim().split('\n');
  for (let i = 0; i < arr2.length; i ++) {
    array.push([arr1[i], Number(arr2[i])]);
  }
  return array;
}

function writeStats () {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
