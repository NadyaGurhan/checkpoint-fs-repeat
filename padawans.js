const fs = require('fs');
const { get } = require('http');

const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');

function getPadawanNames() {
  return padawans.split('\n').splice(0, padawans.split('\n').length - 1);
}

function getLightsaberScores() {
  return scores.split('\n').map((el) => +el);
}

console.log(getLightsaberScores())

function getStats() {
  const getStatsArr = [];
  let newArr = [];
  const a = getPadawanNames();
  const b = getLightsaberScores();
  for (let i = 0; i < a.length; i++) {
    getStatsArr.push([a[i]]);
    getStatsArr[i].push(b[i])
  }
  return getStatsArr;
}

function writeStats() {
  fs.appendFileSync(__dirname + '/data/scores.txt', getStats(), "utf-8")
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
