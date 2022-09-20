const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1);
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => +el);
  return scores;
}

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1);
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => +el);
  let array = [];
  for (let i = 0; i < padawans.length; i += 1) {
    let arr = [];
    arr.push(padawans[i], scores[i]);
    array.push(arr);
  }
  return array;
}

function writeStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').slice(0, -1);
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => +el);
  let array = [];
  for (let i = 0; i < padawans.length; i += 1) {
    let arr = [];
    arr.push(padawans[i], scores[i]);
    array.push(arr);
  }
  let str = '';
  for (let i = 0; i < array.length; i += 1) {
    str += `${array[i].join(' ')}\n`;
  }
  fs.writeFileSync('data/stats.txt', str.trim());
  return str;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
