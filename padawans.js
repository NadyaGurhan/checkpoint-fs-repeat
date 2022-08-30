const fs = require('fs');

function getPadawanNames() {
  const str = fs.readFileSync('./data/padawans.txt', 'utf8');
  const arr = str.split('\n');
  arr.length = 4;
  return arr;
}

function getLightsaberScores() {
  const str = fs.readFileSync('./data/scores.txt', 'utf8');
  const arr = str.split('\n');
  arr.length = 4;
  const res = arr.map((el) => Number(el));
  return res;
}

function getStats() {
  const names = getPadawanNames();
  const score = getLightsaberScores();

  const result = [];
  for (let i = 0; i < names.length; i += 1) {
    result.push([names[i], score[i]]);
  }
  return result;
}

function writeStats() {
  const arr = getStats();
  const res = arr.reduce((acc, el, ind) => {
    if (ind < arr.length - 1) {
      acc += `${el[0]} ${el[1]}\n`;
    } else {
      acc += `${el[0]} ${el[1]}`;
    }
    return acc;
  }, '');
  fs.appendFileSync('./data/stats.txt', `${res}`, 'utf8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
