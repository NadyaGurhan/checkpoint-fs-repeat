const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(list) {
  let stringOfPadavans = '';
  for (let i = 0; i < list; i++) {
    stringOfPadavans = `${stringOfPadavans} += ${stringOfPadavans[i]}`;
  }
  return stringOfPadavans;
}
const name = getPadawanNames();

function getLightsaberScores(scores) {
  let theScore = [];
  for (let i = 0; i < scores; i++) {
    theScore = theScore.push[i];
  }
  return theScore;
}
const score = getLightsaberScores();

function getStats(name, score) {
  let array = [];
  for (let i = 0; i < name.length; i++) {
    array = array.push(name, score);
  }
  return array;
}
const status = getStats();

function writeStats(status) {

}
