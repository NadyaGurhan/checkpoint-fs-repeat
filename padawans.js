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
  // const result = [];
  // scores.forEach((e) => result.push(+e));
  // return result;
  const data1 = fs.readFileSync('./data/scores.txt', 'utf8');
  return data1.trim().split('\n').map((el) => Number(el));
}

function getStats() {
  // const result = [];
  // padawans.map((el, i) => {
  //   result.push([el]);
  //   result[i].push(+scores[i]);
  // });
  // return result;
  return padawans.map((el, i) => [padawans[i], +scores[i]]);
}

const savePath = './data/stats.txt';

function writeStats(stats) {
  return fs.writeFileSync('./data/stats.txt', stats.map((stat) => stat.join(' ')).join('\n'));
}

// console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
