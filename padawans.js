const fs = require('fs');
const string = fs.readFileSync('./data/padawans.txt', 'utf8').trim();
let score = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  return string.split('\n');
}

function getLightsaberScores() {
  return score.split('\n').map((el) => Number(el));
}

function getStats() {
  let newArr = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    let sum = [];
    sum.push(getPadawanNames()[i], getLightsaberScores()[i]);
    newArr.push(sum);
  }
  return newArr;
}

function writeStats() {
  let write = getStats();
  let res = write.reduce((acc, el) => { acc += `${el.join(' ')}\n`;
    return acc;
}, '');
  fs.writeFileSync('./data/stats.txt', res.trim(), 'utf-8');
  return res
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
