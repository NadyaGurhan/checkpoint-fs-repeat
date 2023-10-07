const fs = require('fs');

function getPadawanNames() {
  const filePath = './data/padawans.txt';
  const data = fs.readFileSync(filePath, 'utf8');
  return data.split('\n');
}
getPadawanNames();

function getLightsaberScores() {
  const filePath1 = './data/scores.txt';
  const data1 = fs.readFileSync(filePath1, 'utf8');
  const newArr = data1.split('\n');
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = Number(newArr[i]);
  }
  return newArr;
}
getLightsaberScores();

function getStats() {
  const arr1 = getPadawanNames();
  const arr2 = getLightsaberScores();
  const array = [];
  for (let i = 0; i < arr1.length; i++) {
    array.push([arr1[i], arr2[i]]);
  }
  return array;
}

function writeStats() {
  const arr = getStats();
  const newstr = arr.join('\n').replaceAll(',', ' ');
  console.log(newstr);
  fs.writeFileSync('./data/stats.txt', newstr);
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
