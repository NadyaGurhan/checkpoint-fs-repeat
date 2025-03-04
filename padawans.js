const fs = require('fs');

function getPadawanNames() {
  const list = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const newArr = list
    .split('\n')
    .map((el) => el.trim())
    .filter((el) => el !== '');
  return newArr;
}

function getLightsaberScores() {
  const list = fs.readFileSync('./data/scores.txt', 'utf-8');
  const newArr = list
    .split('\n')
    .map((el) => el.trim())
    .map((el) => Number(el));
  return newArr;
}

function getStats() {
  const list = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const result = [];
  const newArr = list
    .split('\n')
    .map((el) => el.trim())
    .filter((el) => el !== '');
  const scoresArr = scores
  .split('\n')
  .map((score) => score.trim())
  .map((score) => Number(score));
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
