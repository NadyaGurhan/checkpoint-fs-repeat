const fs = require('fs');
const read = (path) => fs.readFileSync(path, 'utf8').trim().split('\n');
const getPadawanNames = (arr=read('./data/padawans.txt')) =>  arr;
const getLightsaberScores = (arr=read('./data/scores.txt')) => arr.map(e => Number(e));
const getStats = (arr=getLightsaberScores()) => getPadawanNames().map((e, i) => [e, arr[i]]);
const result = getStats().map(e => e.join(' ') + '\n');
const writeStats = arr=result => fs.writeFileSync('./data/stats.txt', result.toString());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
