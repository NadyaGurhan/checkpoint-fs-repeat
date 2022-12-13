const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawansArray = padawans.split('\n');
  const arr = padawansArray.filter((el) => el.length > 0);
  return arr;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const arr = scores.split('\n');
  const arrScores = arr.map((el) => parseFloat(el));
  return arrScores;
}

function getStats() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const scoresArray = scores.split('\n');
  const padawansArray = padawans.split('\n');
  const scoresArr = scoresArray
    .filter((el) => el.length > 0)
    .map((el) => parseFloat(el));
  const padawansArr = padawansArray.filter((el) => el.length > 0);
  const arr = [];
  padawansArr.forEach((el, i) => {
    arr.push([el, scoresArr[i]]);
  });
  return arr;
}

function writeStats(stats) {
  fs.writeFileSync('data/stats.txt', '');
  stats.forEach((el, i) => {
    if (i === 0) {
      fs.appendFileSync('data/stats.txt', `${el.join(' ')}`);
    } else {
      fs.appendFileSync('data/stats.txt', `\n${el.join(' ')}`);
    }
  });
}

console.log(writeStats(getStats()));

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
