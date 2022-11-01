const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  const list = fs.readFileSync('./data/scores.txt', 'utf-8');
  return list.split('\n').map((el) => el * 1);
}

function getStats() {
  const arrNames = getPadawanNames();
  const arrScore = getLightsaberScores();
  const newArr = [];
  const res = newArr.push(arrNames.map((el, i) => el + arrScore[i]));
  return res;
}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
