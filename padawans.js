const fs = require('fs');
const path = require('path');

function getPadawanNames() {
  let names = fs
    .readFileSync('./data/padawans.txt', 'utf8')
    .split('\n')
    .filter((el) => el.length > 1);
  //console.log(names);
  return names;
}
getPadawanNames();
function getLightsaberScores() {
  let scores = fs
    .readFileSync('./data/scores.txt', 'utf8')
    .split('\n')
    .map((el) => +el);
  //console.log(scores);
  return scores;
}
getLightsaberScores();
function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let stat = names.map((elem, index) => `${elem}, ${scores[index]}`);
  console.log(stat);

  return stat;
}

getStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
