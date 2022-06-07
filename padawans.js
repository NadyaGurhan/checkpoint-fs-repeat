const fs = require('fs');

function getPadawanNames() {
  const resultName = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return resultName.slice(0, 4);
}
// console.log(getPadawanNames());

function getLightsaberScores() {
  const resultScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return resultScores.map((el) => Number(el));
}
// console.log(getLightsaberScores());

function getStats() {
  let arrStats = [];
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  for (let i = 0; i < names.length; i++) {
    arrStats.push([names[i], scores[i]]);
  }
  return arrStats;
}
// console.log(getStats());

function writeStats() {
  let result = getStats().map((item) => item.join(' ')).join('\n');
  fs.appendFileSync('./data/stats.txt', result);
}

  module.exports = {
    getPadawanNames,
    getLightsaberScores,
    getStats,
    writeStats,
  };


