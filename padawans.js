const fs = require('fs')

const readFile = () => {
  const names = fs.readFileSync(__dirname + '/data/padawans.txt', 'utf-8');
  return names;
}

const readScore = () => {
  const names = fs.readFileSync(__dirname + '/data/scores.txt', 'utf-8');
  return names;
}

const getPadawanNames = (str) => {
  const newArr = str.split('\n');
  newArr.pop();
  return newArr
}
const getLightsaberScores = (str) => {
  const newArr = str.split('\n');
  return newArr;
}

console.log(getPadawanNames(readFile()));
console.log(getLightsaberScores(readScore()))
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
