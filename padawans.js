const fs = require('fs');

function getPadawanNames() {
  const arr = [];
  const list = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
  arr.push(list);
  return arr.flat();
}
getPadawanNames();

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

  return score.map((el) => Number(el));
}
getLightsaberScores();

function getStats() {

}
getStats();

function writeStats() {

}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
