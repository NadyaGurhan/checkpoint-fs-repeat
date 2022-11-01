const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
const padaw = fs.readFileSync('./data/padawans.txt', 'utf8');
const score = fs.readFileSync('./data/scores.txt', 'utf8');
const padawArr = padaw.split('\n');
const scoreStr = score.split('\n');
const scoreArr = scoreStr.map((el) => +el);
// console.log(scoreArr.map(el => +el));

function getPadawanNames() {
  return padawArr;
}
// console.log(getPadawanNames());

function getLightsaberScores() {
  return scoreArr.map((el) => +el);
}
// console.log(getLightsaberScores());

function getStats() {
  const arr = [];
  for (let i = 0; i < padawArr.length; i++) {
    const subArr = [];
    subArr.push(padawArr[i]);
    subArr.push(scoreArr[i]);
    // let arr1 = subArr.join(' ')
    arr.push(subArr);
  }
  return arr;
}

const stat = getStats();
// let array = []
// for (let i = 0; i < stat.length; i++) {
//   stat[i].join(' ')
// }

console.log(stat);
// console.log(getStats());
// console.log(stat.join('\n'))

function writeStats() {
  const stats = fs.writeFileSync('./data/stats.txt', stat.join('\n'));
}

writeStats();
