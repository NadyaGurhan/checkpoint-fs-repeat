const fs = require('fs');

let name = '';

const getPadawanNames = () => {
  name = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return name;
};
console.log(getPadawanNames());

let scores = '';
const getLightsaberScores = () => {
  scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores;
};

console.log(getLightsaberScores());

let array = [];
array = getPadawanNames().split(' ');
const newArray = String(array).replace(/\n/gi, ' ');

array = newArray.split(' ');

const results = [];
const getStats = () => {
  for (let i = 0; i < array.length - 1; i += 1) {
    const names = array[i];
    results.push(names);
  }
  return results;
};

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
