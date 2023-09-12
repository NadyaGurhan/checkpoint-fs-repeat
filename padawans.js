const fs = require('fs');
const { EOL } = require('os');
const path = require('path');
const dirname = path.join(__dirname);
const padawans = fs
  .readFileSync(`${dirname}/data/padawans.txt`, 'utf-8')
  .split(EOL);
const scores = fs
  .readFileSync(`${dirname}/data/scores.txt`, 'utf-8')
  .split(EOL)
  .map((elem) => Number(elem));
function getPadawanNames() {
  return padawans;
}
function getLightsaberScores() {
  return scores;
}
function getStats() {
  let newArr = [];
  for (let i = 0; i < padawans.length; i += 1) {
    let arr = [];
    arr.push(padawans[i], scores[i]);
    newArr.push(arr);
  }
  return newArr;
}
function writeStats() {
  let stats = getStats()
    .map((elem) => elem.join(' '))
    .join(EOL);
  return fs.writeFileSync(`${dirname}/data/stats.txt`, stats);
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
