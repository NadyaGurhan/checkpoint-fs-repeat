const fs = require('fs');
const { get } = require('https');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  let arr = [];
  let fsRead = fs.readFileSync('data/padawans.txt', 'utf-8').trim();
  arr = fsRead.split('\n');
  return arr;
}

function getLightsaberScores() {
  const arr = [];
  const fsRead = fs.readFileSync('data/scores.txt', 'utf-8').trim();
  let fsReadArr = fsRead.split('\n');
  for (const elem in fsReadArr) {
    arr.push(Number(fsReadArr[elem]));
  }
  return arr;
}

function getStats() {
  const resArr = [];

  const namesArr = getPadawanNames();
  const scoresArr = getLightsaberScores();
  for (let i = 0; i < namesArr.length; i += 1) {
    resArr.push([namesArr[i], scoresArr[i]]);
  }
  return resArr;
}

function writeStats() {
  let statsToWrite = '';
  const namesArr = getPadawanNames();
  const scoresArr = getLightsaberScores();

  for (let i = 0; i < namesArr.length; i += 1) {
    if (i === namesArr.length - 1) {
      statsToWrite += namesArr[i] + ' ' + scoresArr[i];
    }
    else {
      statsToWrite += namesArr[i] + ' ' + scoresArr[i] + '\n';
    }
  }
  return fs.writeFileSync('data/stats.txt', statsToWrite);
}
