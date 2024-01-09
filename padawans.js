const fs = require('fs');

const getPadawanNames = () => {
  const arrMass = fs.readFileSync('data/padawans.txt', 'utf8');
  return arrMass.trim().split('\n');
}

const  getLightsaberScores = () => {
  const massArrr = fs.readFileSync('data/scores.txt', 'utf8').split('\n');
  return massArrr.map((el) => Number(el));
}

const getStats = () => {
  const num = getPadawanNames().map((el) => el.trim());
  const scores = getLightsaberScores();
  return num.map((el, i) => [el, scores[i]]);
}
const writeStats = () => {
  const arr1 = getStats();
  const arr2 = arr1.join('\n').replaceAll(',', ' ');
  const arr3 = fs.writeFileSync('data/stats.txt', arr2, 'utf-8');
  return arr3;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
