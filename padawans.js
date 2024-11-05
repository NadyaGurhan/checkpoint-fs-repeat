const fs = require('fs')

function getPadawanNames () {
  const padawansList = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawansArr = padawansList.trim().split('\n');
  return padawansArr;
}

function getLightsaberScores () {
  const scoresList = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scoresArr = scoresList.split('\n').map((el) => +el);
  return scoresArr;
}

function getStats () {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const arr = [];

  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], scores[i]]);
  }

  return arr;
}







module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
 // writeStats,
};
