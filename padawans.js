const fs = require('fs');

const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8').split('\n');
const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').split('\n');

const getPadawanNames = () => {
  const arr = [];

  for (let i = 0; i < padawans.length - 1; ++i) {
    console.log(padawans.length);
    arr.push(padawans[i]);
  }
  console.log(arr);
  return arr;
};

const getLightsaberScores = () => {
  const arr = [];

  for (let i = 0; i < scores.length; ++i) {
    arr.push(scores[i] - 0);
  }

  return arr;
};

const getStats = () => {
  const arr = [];

  for (let i = 0; i < scores.length; ++i) {
    arr.push([padawans[i], scores[i] - 0]);
  }

  return arr;
};

const arr = getStats().join('\n ');
const writeStats = () => {
  fs.writeFileSync('data/stats.txt', arr);
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

console.log(writeStats());
