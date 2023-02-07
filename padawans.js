const fs = require('fs')

const text = fs.readFileSync(__dirname + '/data/padawans.txt', "utf8");
const array = text.split("\n");
const textSc = fs.readFileSync(__dirname + "/data/scores.txt", "utf8");
const arraySc = textSc.split("\n");


function getPadawanNames() {
  const arr = [];
  array.forEach (el => {
    arr.push(el);
  })
  return arr;
};

function getLightsaberScores() {
  const arr = [];
  arraySc.forEach (num => {
    arr.push(Number(num))
  });
  return arr;
};

const arrayPad = getPadawanNames();
const arrayScore = getLightsaberScores();

function getStats() {
  const newArr = [];
  const arrayStats = [];
  for (let i = 0; i < arrayPad.length; i++) {
    newArr.push(arrayPad[i], +arrayScore[i]);
    arrayStats.push(newArr);
  }
  return newArr;
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
