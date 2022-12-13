const fs = require('fs');
const { stat } = require('fs/promises');

const readPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const readScores = fs.readFileSync('./data/scores.txt', 'utf-8');
function getPadawanNames() {
  return readPadawans.split('\n').slice(0, 4);
}
// getPadawanNames(read);
function getLightsaberScores() {
  return readScores.split('\n').map((el) => Number(el));
}
// getLightsaberScores();
function getStats() {
  const numberScores = getLightsaberScores();
  const padawans = getPadawanNames();
  const arr = [];
  const res = [];
  const arrSize = 2;
  for (let i = 0; i < padawans.length; i += 1) {
    // const newArr = ;
    arr.push(padawans[i], numberScores[i]);
  }
  for (let j = 0; j < arr.length; j += arrSize) {
    res.push(arr.slice(j, j + arrSize));
  }
  return res;
  // return arr[newArr];
}
// getStats();

function writeStats() {
  const stats = getStats();
  const newStr = stats.join('\n').split(',').join(' ');
  fs.writeFileSync('./data/stats.txt', newStr);
}
// writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
