const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const name = [];
  for (let i = 0; i < names.length; i += 1) {
    name.push(names[i].split());
  }
  names.pop();
  return names;
}
getPadawanNames();

function getPadawanScores() {
  const useLightSword = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
}
console.log(getPadawanScores());
module.exports = {
  getPadawanNames,
  // getLightsaberScores,
  // getStats,
  // writeStats,
};
