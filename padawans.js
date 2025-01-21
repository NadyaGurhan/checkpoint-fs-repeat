const { log } = require('console');
const fs = require('fs');
const { EOL } = require('os');

function getPadawanNames() {
  const read = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const arr = read.split(EOL);
  return arr.slice(0, arr.length - 1);
}

function getLightsaberScores() {
  const read = fs.readFileSync('./data/scores.txt', 'utf-8');
  const arr = read.split(EOL);
  const lastArr = [];
  for (const i of arr) {
    lastArr.push(Number(i));
  }
  return lastArr;
}
function getStats() {
  console.log(getPadawanNames());
  console.log(getLightsaberScores());
  const len = getLightsaberScores().length;
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push([getPadawanNames()[i], getLightsaberScores()[i]]);
  }

  return arr;
}

function writeStats(arr) {
  let strr = '';
  for (const i of arr) {
    let str = '';
    for (const p of i) {
      str += `${p} `;
    }
    strr += str.trim() + EOL;
  }
  fs.writeFileSync('./data/stats.txt', strr.trim());
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

getPadawanNames();
getLightsaberScores();
getStats();
