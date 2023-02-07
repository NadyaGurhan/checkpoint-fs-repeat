const fs = require('fs');

const padPath = '/data/padawans.txt';
const data = fs.readFileSync(__dirname + padPath, 'utf8');
const padawans = data.split('\n');
padawans.pop();

const scorePath = '/data/scores.txt';
const scoreData = fs.readFileSync(__dirname + scorePath, 'utf8');
const scores = scoreData.split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  const result = [];
  scores.forEach((e) => result.push(+e));
  return result;
}

function getStats() {
  const result = [];
  padawans.map((el, i) => {
    result.push([el]);
    result[i].push(+scores[i]);
  });
  return result;
}

const savePath = './data/stats.txt';

function writeStats() {
  const arr = getStats();
  const newArr = [];
  let result;
  arr.forEach(() => {
    newArr.join(',');
  });
  // newArr.forEach((el) => {
  // result.join()
  // })
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
