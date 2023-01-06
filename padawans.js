const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'UTF-8');
const scores = fs.readFileSync('./data/scores.txt', 'UTF-8');

function getPadawanNames() {
  return padawans.split('\n').slice(0, 4);
}

function getLightsaberScores() {
  return scores.split('\n').map((el) => +el);
}

function getStats() {
  const padawansNew = padawans.split('\n').slice(0, 4);
  const scoresNew = scores.split('\n').map((el) => +el);
  const arr = [];
  for (let i = 0; i < padawansNew.length; i++) {
    arr.push([padawansNew[i], scoresNew[i]]);
  }
  return arr;
}

function writeStats() {
  const arr = [];
  const padawansNew = padawans.split('\n').slice(0, 4);
  const scoresNew = scores.split('\n');
  for (let i = 0; i < padawansNew.length; i++) {
    arr.push(`${padawansNew[i]} ${scoresNew[i]}`);
  }
  arr.join('\n');
  fs.appendFileSync('./data/stats.txt', arr, 'utf8');
}
console.log(writeStats());

// function writeStats(arr3) {
//   fs.appendFileSync('./data/stats.txt', `${arr3}\n`);
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

// const padawansArr = padawans.split('\n');

//   const arr = [];

//   for (let index = 0; index < padawansArr.length - 1; index++) {
//     arr.push(padawansArr[index]);
//   }
//   return arr;

// const padawansArr = padawans.split('\n');
//   const scoresArr = scores.split('\n');

//   const arr = [];

//   for (let index = 0; index < padawansArr.length - 1; index++) {
//     // arr.push(padawansArr[index],scoresArr[index]);
//     arr.push(+scoresArr[index]);
//   }
//   return arr;

// const padawansArr = padawans.split('\n');
//   const scoresArr = scores.split('\n');

//   const arr = [];

//   for (let index = 0; index < padawansArr.length - 1; index++) {
//     arr.push([padawansArr[index], +scoresArr[index]]);
//   }
//   return arr;
