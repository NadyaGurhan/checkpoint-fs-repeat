const fs = require('fs');

function getPadawanNames () {
let padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
let namesList = padawanNames.split('\n');
namesList.pop()
return namesList;
}

// console.log(getPadawanNames())

function getLightsaberScores () {
  let lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  let lightsaberScor = lightsaberScores.split('\n');
  let result = lightsaberScor.map(i => Number(i));
  return result;
}
// console.log(getLightsaberScores())

function getStats () {
  // console.log(getPadawanNames())
}

function writeStats () {
  // console.log(getPadawanNames())
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

