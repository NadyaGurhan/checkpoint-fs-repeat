const fs = require('fs');
const filePadawanNames = './data/padawans.txt';
const fileScores = './data/scores.txt';
const fileStats = './data/stats.txt';

const getPadawanNames = fs.readFileSync(filePadawanNames, 'utf-8').split('\n');
getPadawanNames.pop();

const getLightsaberScores = fs.readFileSync(fileScores, 'utf-8').split('\n');
getLightsaberScores.pop();

/* const writeStats = fs.writeFileSync(fileStats, `${}`); */

const getStats = function arr (str1, str2) {
  let x = str1.split('\n');
  let y = str2.split('\n');
  let p = [];
  for (let i = 0; i < y.length; i++) {
    p[i] = [x[i], Number(y[i])];
  }
};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  /* writeStats, */
};
