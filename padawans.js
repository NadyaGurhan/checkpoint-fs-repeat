const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const arrInDataP = fs.readFileSync('./data/padawans.txt', 'utf-8').split('/n');
const arrInDataS = fs.readFileSync('./data/scores.txt`', 'utf-8').split('/n');
// 1
function getPadawanNames() {
  return arrInDataP;
}
// console.log(getPadawanNames())

// 2
function getLightsaberScores() {
  return arrInDataS;
}

// 3
function getStats(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(arrInDataP[i].concat(arrInDataS[i]));
  }
  return arr;
}
