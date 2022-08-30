const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

// console.log(getStats());

function getPadawanNames() {
  let arr = [];
  arr = padawans.split(/\n/);
  arr.pop();
  return arr;
}

function getLightsaberScores() {
  return scores.split(/\n/).map(x => Number(x));
}

function getStats() {
  let padawansArr = [];
  let scoresArr = [];
  padawansArr = padawans.split(/\n/);
  padawansArr.pop();
  scoresArr = scores.split(/\n/).map(x => Number(x));

  // let arr = [];
  let arr2 = [];
  let length = padawansArr.length;

  for (let i = 0; i < length; i++) {
    let arr = [];
    arr.push(padawansArr[i], scoresArr[i]);
    arr2.push(arr);
  }
  return arr2;
}

const stats = getStats().map(x => x.join(' '))
let stats2 = stats.join('\n')
console.log(stats2)

function writeStats() {
  fs.appendFileSync('./data/stats.txt', stats2);
}