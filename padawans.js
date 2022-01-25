const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf8').trim();
const scores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  return padawans.split('\n');
}
getPadawanNames();

function getLightsaberScores() {
  return scores.split('\n').map((el) => Number(el));
}
getLightsaberScores();

function getStats() {
  let newArr = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    let sum = [];
    sum.push(getPadawanNames()[i], getLightsaberScores()[i]);
    newArr.push(sum);
  }
  return newArr;
}
getStats();

function writeStats() {
  let write = getStats();
  let result = write.reduce((acc, curr) => { acc += `${curr.join(' ')}\n`; return acc; }, '');
    fs.writeFileSync('./data/stats.txt', result, 'utf8');
    return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
