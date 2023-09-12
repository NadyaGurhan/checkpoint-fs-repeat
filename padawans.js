const fs = require('fs');

function getPadawanNames() {

}
getPadawanNames()


function getLightsaberScores() {
  const array = [];
  const dataScores = fs.readFileSync('data/scores.txt', 'utf-8').split('\n');
  dataScores.forEach((el) => array.push(Number(el)))
return array
}

getLightsaberScores();


function getStats() {

}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
