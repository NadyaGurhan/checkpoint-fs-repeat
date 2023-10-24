const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
const dataP = fs.readFileSync('./data/padawans.txt', 'utf-8');
const dataS = fs.readFileSync('./data/scores.txt', 'utf-8');
function getPadawanNames() {
  const arr = dataP.split('\n');
  const arr1 = arr.slice('0', '4');
  return arr1;
}
getPadawanNames();

function getLightsaberScores() {
  const arrS = dataS.split('\n');
  const nArr = [];
  for (let i = 0; i < arrS.length; i++) {
    arrS[i] = Number(arrS[i]);
    nArr.push(arrS[i]);
  }

  return nArr;
}
getLightsaberScores();

function getStats() {
  const arrS = dataS.split('\n');
  const arrP = dataP.split('\n');
  const arrSS = arrS.slice('0', '4');
  const arrPS = arrP.slice('0', '4');

  const result = [];
  let test = [];
  for (let i = 0; i < arrSS.length; i++) {
    test.push(arrPS[i]);
    test.push(Number(arrSS[i]));
    result.push(test);
    test = [];
  }

  return result;
}

getStats();
