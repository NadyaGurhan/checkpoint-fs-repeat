const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n');
  // .map((el) => el.split(','))
  return names;
  // console.log(names);
}
// getPadawanNames();

function getLightsaberScores() {
  const names = fs.readFileSync('data/scores.txt', 'utf-8').split('\n')
    .map((el) => Number(el));
  // console.log(names);
  return names;
}
// getLightsaberScores();

function getStats() {
  const arr1 = getPadawanNames;
  const arr2 = getLightsaberScores;
  const newArray = [];
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    for (let i = 0; i < length; i += 1) {
    if (arr1.length === arr2.length) {
        newArray.push(arr1[i] + arr2[i]);
      }
    }
  }
}
// не успел завершить
function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
