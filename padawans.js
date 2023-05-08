const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}
getPadawanNames();

function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
}
getLightsaberScores();

function getStats() {
  const arr = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < names.length; i++) {
    arr.push([names[i], +scores[i]]);
  }
  return arr;
}
getStats();

function writeStats() {
  const stats = getStats().join('\n').replace(/,/g, ' ');
  return fs.writeFileSync('./data/stats.txt', `${stats}`);
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
