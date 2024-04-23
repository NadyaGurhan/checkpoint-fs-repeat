const fs = require('fs');
const path = require('path');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
const padawansArr = padawans.split('\n').slice(0, padawans.split('\n').length - 1);
const scoresArr = scores.split('\n').map(el => Number(el));



getPadawanNames = () => padawansArr;
getLightsaberScores = () => scoresArr;

console.log(getPadawanNames())
console.log(getLightsaberScores())




getStats = () => {}
writeStats = () => {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
