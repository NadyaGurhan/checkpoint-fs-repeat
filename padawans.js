const fs = require('fs');

let filenamePadawans = './data/padawans.txt';
let filenameScores = './data/scores.txt';
let filenameSaveStats = 'data/stats.txt';

function getPadawanNames(filename) {
  return fs.readFileSync(filename, 'utf-8')
}
//console.log(getPadawanNames(filenamePadawans));

let padawanNames = getPadawanNames(filenamePadawans).split('\n');
//console.log(padawanNames);

function getLightsaberScores(filename) {
  return fs.readFileSync(filename, 'utf-8')
}
//console.log(getLightsaberScores(filenameScores));

let padawanScores = getLightsaberScores(filenameScores).split('\n');
//console.log(padawanScores);

function getStats() {
  let nestedStatsArr = [];
  for (let i = 0; i < padawanScores.length; i += 1) {
    let innerStatsArr = [];
    innerStatsArr.push(padawanNames[i]);
    innerStatsArr.push(padawanScores[i]);
    nestedStatsArr.push(innerStatsArr);
  }
  return nestedStatsArr;
}
let stats = getStats();

function writeStats(stats) {
  let str = '';
  for (let i = 0; i < stats.length; i += 1) {
    str += stats[i].join(' ') + '\n';
  }
  fs.writeFileSync('data/stats.txt', str)
  return str;
}
//console.log();(writeStats(stats))
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
