const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync(__dirname + '/data/padawans.txt', 'utf8');
  const padawansArr = padawans.split('\n').slice(0, -1);
  return padawansArr;
}

function getLightsaberScores() {
  const scores = fs.readFileSync(__dirname + '/data/scores.txt', 'utf8');
  const scoresArr = scores.split('\n');
  let arr = [];
  for (let i = 0; i < scoresArr.length; i++) {
    arr.push(Number(scoresArr[i]));
  }
  return arr;
}
console.log(getLightsaberScores())

function getStats() {
  const padawans = fs.readFileSync(__dirname + '/data/padawans.txt', 'utf8');
  let padawansArr = padawans.split('\n').slice(0, -1);
  const scores = fs.readFileSync(__dirname + '/data/scores.txt', 'utf8');
  let scoresArr = scores.split('\n');
  let newPadawans = [];
  let result = [];
  for (let i = 0; i < padawansArr.length; i++) {
    newPadawans.push(padawansArr[i].split(', '));
  }
  return newPadawans;
}
console.log(getStats());

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
