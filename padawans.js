const fs = require('fs');

const padawansFile = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scoresFile = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const result = padawansFile.split('\n');
  result.pop();
  return result;
}

function getLightsaberScores() {
  const result = scoresFile.split('\n');
  const result2 = result.map((el) => +el);
  return result2;
}
function getStats() {
  // const array1 = getPadawanNames();
  // const array2 = getLightsaberScores();
  // const arr1 = array1.map((el) => el.split(','));
  // const arr2 = array2.map((el) => (`${el}`).split(','));
  // resultArr = [];
  // for (let i = 0; i < array.length; i++) {
  //   resultArr[i] = arr1[i].concat(arr2[i]);
  // }
  // // исправить
  // return resultArr;
}
getStats();

function writeStats() {
  const result = fs.writeFileSync('data/stats.txt', 'utf-8');
  return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
