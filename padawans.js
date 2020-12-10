const fs = require('fs')

function getPadawanNames(filename = './data/padawans.txt') {
  const fs = require('fs');
  const re = /\n/;
  let str = fs.readFileSync(filename, 'utf-8');
  let arr = str.split(re);
  arr.pop();
  return arr

}

function getLightsaberScores(filename = './data/scores.txt') {
  const fs = require('fs');
  const re = /\n/;
  let str = fs.readFileSync(filename, 'utf-8');
  let arr = str.split(re);
  let arrNumber = arr.map(e => Number(e));
  return arrNumber

}

function getStats() {
  let key = getPadawanNames(),
    values = getLightsaberScores(),
    result = {};
  key.forEach((key, idx) => result[key] = values[idx]);
  return Object.entries(result);
}

function writeStats(arrayOfArray) {
  fs.appendFileSync(`data/stats.txt`, arrayOfArray.join('\n').replace(/,/gm,' '));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
