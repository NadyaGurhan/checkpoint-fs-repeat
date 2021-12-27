const { table } = require('console');
const fs = require('fs');
const { split } = require('lodash');
const { number } = require('yargs');

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
// console.log(getLightsaberScores());

function getStats() {
  const padawans = fs.readFileSync(__dirname + '/data/padawans.txt', 'utf8');
  let padawansArr = padawans.split('\n').slice(0, -1).map((item) => item.split());
  const scores = fs.readFileSync(__dirname + '/data/scores.txt', 'utf8');
  const scoresArr = scores.split('\n').map((item) => Number(item));
  padawansArr = padawansArr.map((item, i) => item.concat(scoresArr[i]));
  return padawansArr;
}
// console.log(getStats());

function writeStats() {
  const list = getStats().join('\n').split(',').join(' ');
  return fs.writeFileSync(`${__dirname}/data/stats.txt`, list);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
