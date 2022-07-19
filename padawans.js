const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const arr = padawans.split('\n');
  const arrSlice = arr.slice(0, -1);
  return arrSlice;
}
console.log(getPadawanNames());


function getLightsaberScores() {
}
console.log(getLightsaberScores());


module.exports = {
  getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
};
