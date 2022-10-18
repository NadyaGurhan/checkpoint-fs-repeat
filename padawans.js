const fs = require('fs');
const padavanNames = fs
  .readFileSync('./data/padawans.txt', { encoding: 'utf8' })
  .split('\n')
  .slice(0, 4);

function getPadawanNames() {
  return padavanNames;
}
const scores = fs
  .readFileSync('./data/scores.txt', { encoding: 'utf8' })
  .split('\n');

function getLightsaberScores() {
  return scores.map((el) => +el);
}
function getStats() {
  let res = [];
  for (let i = 0; i < scores.length; i += 1) {
    res.push([padavanNames[i], +scores[i]]);
  }
  return res;
}

function writeStats() {
  let arr = [];
  let res = '';
  for (let i = 0; i < scores.length; i += 1) {
    arr.push([`${padavanNames[i]} ${scores[i]}`]);
  }
  for (el of arr) {
    res += `${el}\\n`;
  }
  return res;
}
const res = writeStats();
console.log(res);

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
