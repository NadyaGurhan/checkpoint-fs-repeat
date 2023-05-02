const fs = require('fs');

const arrPadavans = fs
  .readFileSync('./data/padawans.txt', 'utf8')
  .trim()
  .split('\n');

function getPadawanNames() {
  return arrPadavans.map((s) => s.trim());
}

const arrScore = fs
  .readFileSync('./data/scores.txt', 'utf8')
  .trim()
  .split('\n');

function getLightsaberScores() {
  let arr = arrScore.map((s) => Number(s.trim()));
  return arr;
}

// ['Revan', 99.9],
// ['Bastila Shan', 92],
// ['Jolee Bindo', 87],
// ['Juhani', 82],
function getStats() {
  let arrPadavans = getPadawanNames();
  let arrScores = getLightsaberScores();

  let resArr = [];
  let el = [];
  for (let i = 0; i < arrPadavans.length; i++) {
    resArr.push(arrPadavans[i], arrScores[i]);
    console.log(resArr[i]);
  }

  return resArr;
}

console.log(getStats());

function writeStats() {
  return 1;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
