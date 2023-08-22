const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

function getPadawanNames() {
  const fileRead = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  return fileRead;
}

function getLightsaberScores() {
  const array = [];
  const fileReadScores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < fileReadScores.length; i += 1) {
    array.push(fileReadScores[i] * 1);
  }
  return array;
}

function getStats() {
  const arr = [];
  const getNames = getPadawanNames();
  const getScores = getLightsaberScores();

  for (let i = 0; i < getScores.length; i += 1) {
    arr.push([getNames[i], getScores[i]]);
  }
  return arr;
}
