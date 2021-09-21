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
  const array1 = getPadawanNames();
  const array2 = getLightsaberScores();
  const arr1 = array1.map((el) => el.split(','));
  const arr2 = array2.map((el) => (`${el}`).split(','));
  const arr3 = arr2.map((el) => +el);

  for (let i = 0; i < arr1.length; i += 1) {
    arr1[i].push(arr3[i]);
  }

  return arr1;
}
getStats();

function writeStats() {
  const data = getStats().join('\n').replaceAll(/,/g, ' ');
  const result = fs.writeFileSync('data/stats.txt', data);
  return result;
}writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
