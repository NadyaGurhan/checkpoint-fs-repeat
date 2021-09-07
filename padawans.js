fs = require('fs');

function getPadawanNames() {
  let names = './data/padawans.txt';
  let arr = fs.readFileSync(names, 'utf-8').split('\n');
  arr.splice(4, 1);
  return arr;
}

function getLightsaberScores() {
  let scores = './data/scores.txt';
  let scoreArr = fs.readFileSync(scores, 'utf-8').split('\n').map(Number);
  return scoreArr;
}

function getStats() {
  let names = './data/padawans.txt';
  let namesArr = fs.readFileSync(names, 'utf-8').split('\n');
  let scores = './data/scores.txt';
  let scoreArr = fs.readFileSync(scores, 'utf-8').split('\n').map(Number);
  let statArr = [];

  for (let i = 0; i < namesArr.length; i++) {
    let padawan = namesArr[i];
    let score = scoreArr[i];
    let stat =
    statArr.push(stat);
  }
  return statArr;
}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
