const fs = require('fs');

const path = require('path');

const getPadawanNames = () => {
  const res = fs.readFileSync(path.join(__dirname, './data/padawans.txt'), 'utf8');
  return res.split('\n').slice(0, -1);
};
// console.log(getPadawanNames());

const getLightsaberScores = () => {
  const newArr = [];
  const res = fs.readFileSync(path.join(__dirname, './data/scores.txt'), 'utf8').split('\n');

  for (let i = 0; i < res.length; i += 1) {
    const res2 = Number(res[i]);
    newArr.push(res2);
  }
  return newArr;
};

const getStats = () => {
  const resArr = [];
  const arr = [];
  const names = fs
    .readFileSync(path.join(__dirname, './data/padawans.txt'), 'utf8')
    .split('\n')
    .slice(0, -1);
  const score = fs.readFileSync(path.join(__dirname, './data/scores.txt'), 'utf8').split('\n');

  for (let i = 0; i < names.length; i += 1) {
    const scoreNum = Number(score[i]);
    arr.push(scoreNum);
    resArr.push([names[i], arr[i]]);
  }
  return resArr;
};
console.log(getStats());

const writeStats = () => {};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
