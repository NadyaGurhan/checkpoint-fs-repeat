const fs = require('fs');

function getPadawanNames() {
  let arrNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n');
  return arrNames;
}

function getLightsaberScores() {
  let arrScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\r\n').map(item => +item);
  return arrScores;
}

function getStats() {
  let arrNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\r\n');
  let arrScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\r\n').map(item => +item);
  let arr = [];
  for (let i = 0; i < arrNames.length; i += 1) {
    let subArr = [];
    subArr.push(arrNames[i]);
    subArr.push(arrScores[i]);
    arr.push(subArr);
  }
  return arr;
}

function writeStats(stats) {
  stats = stats.join('\n').split(',').join(' ');
  fs.writeFileSync('./data/stats.txt', stats, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
