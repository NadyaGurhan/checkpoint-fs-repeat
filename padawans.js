const fs = require('fs');
const { EOL } = require('os');
const path = require('path');

function getPadawanNames() {
  const arr = fs.readFileSync(`./data/padawans.txt`, `utf-8`).trim().split(EOL);
  return arr;
}

function getLightsaberScores() {
  const arrs = fs.readFileSync(`./data/scores.txt`, `utf-8`).trim().split(EOL);
  const newArr = arrs.map((el) => (el = Number(el)));
  return newArr;
}

function getStats() {
  const nam = getLightsaberScores()
  const arr = getPadawanNames()
  const newArr = nam.map((el) => (el = Number(el)));
  const neww = [];
  for (let i = 0; i < arr.length; i++) {
    const lol = [];
    lol.push(arr[i]);
    lol.push(newArr[i]);
    neww.push(lol);
  }
  return neww
}

function writeStats() {
  const neww = getStats()
  const hap = neww.map((el) => (el = el.join(' '))).join('\n');

  const filePath = path.join(__dirname, 'data', 'stats.txt');
  fs.writeFileSync(filePath, hap);
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
