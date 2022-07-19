const fs = require('fs');
const path = require('path');

const fileName = 'padawans.txt';
const filePath = path.resolve(__dirname, './', 'data', fileName);
const str = fs.readFileSync(filePath, 'utf-8');
const array = str.split('\n');

const fineName1 = 'scores.txt';
const filePath1 = path.resolve(__dirname, './', 'data', fineName1);
const str1 = fs.readFileSync(filePath1, 'utf-8');
const array1 = str1.split('\n');

const file = './data/stats.txt';
fs.writeFileSync(file, '');




function getPadawanNames() {
  return array.slice(0, array.length - 1);
}


function getLightsaberScores() {
  return array1.map(item => +item);
}


function getStats() {
  const result = [];
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < padawans.length; i++) {
    result[i] = [];
    result[i].push(padawans[i], scores[i]);
  }
  return result;
}


function writeStats() {
  let str = getStats();
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].join(' ')
  }
  fs.writeFileSync(file, str.join('\n'));
}


writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
