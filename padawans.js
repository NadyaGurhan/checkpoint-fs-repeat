const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const padawansArr = padawans.split('\n');
padawansArr.pop();
console.log(padawansArr);

const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
const scoresArr = scores.split('\n');
console.log(scoresArr);
const scoresArrInt = [];
for (let i = 0; i < scoresArr.length; i += 1) {
  scoresArrInt.push(+scoresArr[i]);
}

function getPadawanNames() {
  return padawansArr;
}

function getLightsaberScores() {
  return scoresArrInt;
}

const statsArr = [];
for (let i = 0; i < padawansArr.length; i += 1) {
  const stats = [];
  for (let j = 0; j < 2; j += 1) {
    stats.push(padawansArr[i]).push(scoresArrInt[i]);
  }
  statsArr.push(stats);
}
console.log(statsArr);

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
