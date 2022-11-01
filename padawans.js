const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8')
    .trim()
    .split('\n');
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => Number(el));
  return scores;
}

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8')
    .trim()
    .split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => Number(el));
  const bigArr = [];
  for (let i = 0; i < padawans.length; i += 1) {
    const arr = [];
    arr.push(padawans[i], scores[i]);
    bigArr.push(arr);
  }
  return bigArr;
}

function writeStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8')
    .trim()
    .split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map((el) => Number(el));
  const bigArr = [];
  for (let i = 0; i < padawans.length; i += 1) {
    const arr = [];
    arr.push(padawans[i], scores[i]);
    bigArr.push(arr);
  }
  let string = '';
  for (let i = 0; i < bigArr.length; i += 1) {
    string += `${bigArr[i].join(' ')}\n`;
  }
  fs.writeFileSync('./data/stats.txt', string.trim());
  return string;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
