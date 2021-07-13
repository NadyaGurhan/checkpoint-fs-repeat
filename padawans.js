const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return data.trim().split('\n');
}

function getLightsaberScores() {
  let str = '';
  let data = [];
  str = fs.readFileSync('./data/scores.txt', 'utf-8');
  return data = str.split('\n').map((elem) => +elem);
}

function getStats() {
  const names = getPadawanNames();
  const Scores = getLightsaberScores();
  const newArr = [];
  for (let index = 0; index < 4; index++) {
    const ar = [];
    ar.push(names[index], Scores[index]);
    newArr.push(ar);
  }
  return newArr;
}

function writeStats(stats) {
  const data = stats.join('\n').split(',').join(' ');
  fs.writeFileSync('./data/stats.txt', data);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
