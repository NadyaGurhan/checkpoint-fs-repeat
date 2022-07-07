const fs = require('fs');
const { resourceLimits } = require('worker_threads');
// const path = require('path');

// fs.readFileSync('data/padawans.txt');
//
function getPadawanNames() {
  const str = fs.readFileSync('./data/padawans.txt', 'utf8');
  return str.split('\n').filter((el) => el !== '');
}
// console.log(getPadawanNames());

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf8');
  return scores.split('\n').map((el) => (+el));
}

function getStats() {
  const arr = [];
  for (let i = 0; i < getPadawanNames().length; i += 1) {
    arr.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }
  return arr;
}

const writeStats = (personArray) => {
  const result = getStats().join('\n').replace(/,/gmi, ' ');
  fs.writeFileSync('./data/stats.txt', result);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
