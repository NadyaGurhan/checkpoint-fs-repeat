const fs = require('fs');

function getPadawanNames() {
  const file = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
  return file;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const newArr = scores.map((el) => Number(el));
  return newArr;
}

function getStats() {
  let arr = [];


}

function writeStats() {
  const getPadawans = getPadawanNames();
  const getScores = getLightsaberScores();
  const arr1 = [];
  for (let i = 0; i < getPadawans.length; i++) {
    const arr2 = []
    arr2.push(getPadawans[i])
    arr1.push(arr2)
  }
  return arr1
}
console.log(writeStats())


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
