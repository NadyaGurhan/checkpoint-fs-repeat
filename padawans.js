const fs = require('fs');

function getPadawanNames() {
  const arr = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
}

function getLightsaberScores() {
  const arr = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(Number(arr[i]));
  }

  return result;
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
}
