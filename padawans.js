const fs = require('fs');
const path = require('node:path');

const padawans = fs.readFileSync(path.join(__dirname, '/data/padawans.txt'), { encoding: 'utf-8' }).split('\n').slice(0, -1);
const scores = fs.readFileSync(path.join(__dirname, '/data/scores.txt'), { encoding: 'utf-8' }).split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores.map((x) => Number(x));
}

function getStats() {
  const arr = [];
  const scoresNum = getLightsaberScores();
  for (let i = 0; i < padawans.length; i += 1) {
    arr.push([padawans[i], scoresNum[i]]);
  }
  return arr;
}

function writeStats() {
  const arr = getStats();
  for (let i = 0; i < arr.length; i += 1) {
    let newString = '';
    if (i === arr.length - 1) newString = '';
    else newString = '\n';
    fs.appendFileSync(path.join(__dirname, '/data/stats.txt'), `${arr[i].join(' ')}${newString}`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
