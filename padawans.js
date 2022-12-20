const fs = require('fs');

const fileSync = fs.readFileSync('./data/padawans.txt', 'utf-8');
const arr = fileSync.split('\n');

const fileSync2 = fs.readFileSync('./data/scores.txt', 'utf-8');
const arr2 = fileSync2.split('\n');

function getPadawanNames() {
  arrRes = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arrRes.push(arr[i]);
  }
  return arrRes;
}
getPadawanNames(arr);

function getLightsaberScores() {
  arrRes2 = [];
  for (let i = 0; i < arr2.length; i++) {
    arrRes2.push(Number(arr2[i]));
  }
  return arrRes2;
}
getLightsaberScores(arr2);

function getStats() {
  // arrRes3 = [];
  // for (let i = 0; i < arr.length - 1; i++) {
  //   for (let j = 0; j < arr2.length - 1; j++) {
  //     arrRes3.push(arr[j]);
  //   }
  // }
  return arrRes3;
}

console.log(getStats(arr, arr2));

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
