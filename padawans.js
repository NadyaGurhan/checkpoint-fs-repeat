const fs = require('fs');

// const PadawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');

// console.log(PadawanNames.split('\n').slice(0, -1));

function getPadawanNames() {
  const PadawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return PadawanNames.split('\n').slice(0, -1);
}
getPadawanNames();

function getLightsaberScores() {
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return lightsaberScores.split('\n').map((string) => string * 1);
}
getLightsaberScores();

function getStats() {
  const arr = getPadawanNames();
  const arr2 = getLightsaberScores();
  const res = [];
  for (let i = 0; i < arr.length; i += 1) {
    const mergeArr = [];
    mergeArr.push(arr[i], arr2[i]);
    res.push(mergeArr);
  }
  return res;
}

getStats();

function writeStats() {
  const statsArr = getStats();
  const newArr = [];
  for (let i = 0; i < statsArr.length; i += 1) {
    newArr.push(statsArr[i].join(' '));
    //console.log(statsArr[i]);
  }
  //console.log(newArr);
  const str = newArr.join('\n');
  console.log(str);
  return fs.writeFileSync('./data/stats.txt', str, 'utf-8');
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
