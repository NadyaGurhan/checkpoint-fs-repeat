const fs = require('fs');
const file1 = './data/padawans.txt';
const text1 = fs.readFileSync(file1, 'utf-8');
const getPadawanNames = text1.split('\n').slice(0, 4);
console.log(getPadawanNames);

const file2 = './data/scores.txt';
const text2 = fs.readFileSync(file2, 'utf-8');
const getLightsaberScores = text2.split('\n').slice(0, 4);
console.log(getLightsaberScores);


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
