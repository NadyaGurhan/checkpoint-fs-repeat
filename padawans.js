const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
const getPN = padawans.split('\n').slice(0, 4);
const getLS = scores.split('\n').map((sc) => +sc);

function getPadawanNames() {
  return getPN;
}

function getLightsaberScores() {
  return getLS;
}

function getStats() {
  const arr = [];
  for (let i = 0; i < getPN.length; i += 1) {
    arr.push([getPN[i], getLS[i]]);
  }
  return arr;
}

function writeStats() {
  const wSt = './data/stats.txt';
  const arr1 = [];
  for (let i = 0; i < getPN.length; i += 1) {
    arr1.push(`${getPN[i]} ${getLS[i]}`);
  }
  const arr2 = arr1.join('\n');
  return fs.writeFileSync(wSt, `${arr2}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
