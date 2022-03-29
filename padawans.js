
const fs = require('fs');
const sila = fs.readFileSync('./data/scores.txt', 'utf8');
const newSila = sila.trim().split('\n')
const arr = fs.readFileSync('./data/padawans.txt', 'utf8');
const newArr = arr.trim().split('\n');


function getPadawanNames() {
  return newArr;
}

function getLightsaberScores() {
  return newSila.filter((num) => Number(num));
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  //getStats,
  //writeStats,
};
