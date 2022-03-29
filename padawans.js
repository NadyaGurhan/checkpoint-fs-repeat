
const fs = require('fs');
const padawans  = fs.readFileSync('data/padawans.txt', 'utf8');
const padawanScores  = fs.readFileSync('data/scores.txt', 'utf8');

function getPadawanNames () {
  let arr = padawans.split('\n');
  let arr2 = arr.pop();
  return arr;
}

function getLightsaberScores () {
  let arr = padawanScores.split('\n');
  return arr.map(item => Number(item));
}

function getStats () {
  
}

function writeStats () {
  
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
