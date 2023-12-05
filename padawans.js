const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const arr = fs.readFileSync('data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
  return arr;
}
getPadawanNames();

function getLightsaberScores() {
  const readFile = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  return readFile.map((el) => Number(el));
}
getLightsaberScores();

function getStats() {
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < getPadawanNames.length; i++) {
    arr1.push(getPadawanNames[i]);
    arr1.push(getLightsaberScores[i]);
    arr2.push(arr1);
  }
  return arr2;
}
getStats();

function writeStats() {
  const stats = getStats();
  const data = fs.writeFileSync('data/stats.txt', `${stats}`);
  return data;
}
writeStats();
