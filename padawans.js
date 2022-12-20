const fs = require('fs');

function getPadawanNames(str) {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const arr = padawanNames.split('\n');
  arr.pop();
  return arr;
}

function getLightsaberScores(params) {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const newStr = scores.split('\n');
  const newArr = [];
  for (let i = 0; i < newStr.length; i += 1) {
    newArr.push(+newStr[i]);
  }
  return newArr;
}

function getStats(params) {
  const getStat = fs.statSync('./data');
}

function writeStats(params) {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
