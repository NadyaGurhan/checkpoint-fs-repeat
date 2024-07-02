const fs = require('fs');
const { join } = require('path');

function getPadawanNames(){
  let arr = fs.readFileSync('./data/padawans.txt', 'utf8').split('\r\n');
  arr.pop();
  return arr;
}
// console.log(getPadawanNames());


function getLightsaberScores(){
  let arr = fs.readFileSync('./data/scores.txt', 'utf8').split('\r\n');
  let newArr = [];
  arr.forEach((el) => newArr.push(parseFloat(el)));
  return newArr;
}
// console.log(getLightsaberScores());

function getStats(){
  let arrPadavans = fs.readFileSync('./data/padawans.txt', 'utf8').split('\r\n');
  arrPadavans.pop();
  let arrScores= fs.readFileSync('./data/scores.txt', 'utf8').split('\r\n');
  let newArrSc = [];
  arrScores.forEach((el) => newArrSc.push(parseFloat(el)));

  const returnArr = [];
  for(let i = 0; i < arrPadavans.length; i++){
    returnArr.push([arrPadavans[i], newArrSc[i]]);
  }
  return returnArr;
}
// console.log(getStats());

function writeStats(){
  const arr = getStats();
  let retArr = arr.join('\r\n').replaceAll(',', ' ');

  fs.writeFileSync('./data/stats.txt', retArr, 'utf8');
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
