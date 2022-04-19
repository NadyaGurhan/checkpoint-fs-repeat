const fs = require('fs');

const names = fs.readFileSync('data/padawans.txt', 'utf8').split('\n').filter(str => str.length > 0);
const scores = fs.readFileSync('data/scores.txt', 'utf8').split('\n').filter(str => str.length > 0);
const scoresNum = []
const stats = []



for (let i = 0; i < scores.length; i += 1) {
  scoresNum.push(parseFloat(scores[i], 10))
}

for (let i = 0; i < names.length; i += 1) {
  stats[i] = new Array;
  stats[i].push(names[i]);
  stats[i].push(scoresNum[i]);
  // console.log(stats);
}



function getPadawanNames() {
  return names;
}

function getLightsaberScores() {
  return scoresNum;
}

function getStats() {
  return stats;
}

function writeStats() {
  let exp = `${names[0]} ${scoresNum[0]}`;
  for (let i = 1; i < names.length; i += 1) {
    exp += `\n${names[i]} ${scoresNum[i]}`;
  }

  fs.writeFileSync('data/stats.txt', exp);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function myForEach (arr, cb) {
  for (let i = 0; i < arr.length; i += 1) {
    cb(arr[i]);
  }
}
