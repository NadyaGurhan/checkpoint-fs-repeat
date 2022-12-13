const fs = require('fs');

function getPadawanNames() {
  const readPad = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return readPad.split('\n');
}
getPadawanNames();

function getLightsaberScores() {
  const readScore = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const arr = [];
  for (let i = 0; i < readScore.length; i += 1) {
    arr.push(Number(readScore[i]));
  }
  return arr;
}

getLightsaberScores();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
