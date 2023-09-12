const fs = require('fs');
const path = require('path');
const dirName = path.join(__dirname);

const padawans = fs
  .readFileSync(`${dirName}/data/padawans.txt`, 'utf-8')
  .split('\r\n');
const scores = fs
  .readFileSync(`${dirName}/data/scores.txt`, 'utf-8')
  .split('\r\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores.map((elem) => +elem);
}

function getStats() {
  const arr = [];

  for (let i = 0; i < padawans.length; i += 1) {
    const currentArr = [];

    currentArr.push(padawans[i], +scores[i]);
    arr.push(currentArr);
  }

  return arr;
}

function writeStats() {
  const stats = getStats()
    .map((elem) => elem.join(' '))
    .join('\n');

  return fs.writeFileSync(`${dirName}/data/stats.txt`, stats);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
