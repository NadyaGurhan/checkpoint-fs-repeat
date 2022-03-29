const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');
const padawansArr = padawans.trim().split('\n');
const scoresArr = scores.split('\n');

function getPadawanNames() {
  return padawansArr;
}

function getLightsaberScores() {
  const scoresNum = [];
  for (let i = 0; i < scoresArr.length; i += 1) {
    scoresNum.push(parseFloat(scoresArr[i]));
  }

  return scoresNum;
}

function getStats() {
  const stats = [];

  for (let i = 0; i < scoresArr.length; i += 1) {
    const arr = [];
    arr.push(padawansArr[i], parseFloat(scoresArr[i]));
    stats.push(arr);
  }
  return stats;
}

function writeStats() {
  for (let i = 0; i < padawansArr.length; i += 1) {
    fs.appendFileSync('data/stats.txt', `${padawansArr[i]}`);
    fs.appendFileSync('data/stats.txt', ' ');
    fs.appendFileSync('data/stats.txt', `${scoresArr[i]}`);
    fs.appendFileSync('data/stats.txt', '\n');
  }
  const file = fs.readFileSync('data/stats.txt', 'utf-8');

  const fileArr = file.split('\n');
  fileArr.pop();

  // не получается вернуть данные без пробела в конце
  return fileArr.join('\n').trim();
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
