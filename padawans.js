const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');

const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores.map((elem) => Number(elem));
}

function getStats() {
  const result = [];
  let arr = [];
  for (let i = 0; i < padawans.length; i += 1) {
    arr.push(padawans[i], Number(scores[i]));
    result.push(arr);
    arr = [];
  }

  return result;
}

function writeStats() {
  const result = [];
  let arr = [];
  for (let i = 0; i < padawans.length; i += 1) {
    arr.push(padawans[i], Number(scores[i]));
    result.push(arr);
    arr = [];
  }

  for (let i = 0; i < result.length; i += 1) {
    result[i] = result[i].join(' ');
  }
  return fs.writeFileSync('./data/stats.txt', `${result.join('\n')}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
