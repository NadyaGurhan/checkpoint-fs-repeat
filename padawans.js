const { log } = require('console');
const fs = require('fs');

// const getPadawanNames = require('./data/padawans.txt');

// function getPadawan() {
//   const arr = [];
//   fs.readFile('getPadawanNames', 'utf8');
//   for (let i = 0; i < getPadawanNames.length; i += 1) {
//     arr.push(getPadawanNames[i]);
//   }
//   return arr;
// }
// getPadawan();

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
}

function getLightsaberScores() {
  const arr = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(+arr[i]);
  }
  return newArr;
}

function getStats() {

}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
