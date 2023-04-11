const fs = require('fs');

function getPadawanNames() {
  const padawanNamesArr = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n');

  const result = padawanNamesArr.slice(0, -1);
  return result;
}

function getLightsaberScores() {
  const scoresArr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const result = [];

  for (let i = 0; i < scoresArr.length; i += 1) {
    result.push(Number(scoresArr[i]));
  }

  return result;
}

function getStats() {
  const padawanNamesArr = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .split('\n');

  const scoresArr = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
