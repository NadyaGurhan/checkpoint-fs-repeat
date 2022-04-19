const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
const scores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  const arr = [];
  for (let i = 0; i < value.length; i++) {
    arr.push(value[i]);
  }
  return arr;
}

function getLightsaberScores(array) {
  let arr = ''
  for (let i = 0; i < array.length -1; i++) {
    arr+= array[i]);
  }
  return arr.split('\n').slice(0, arr.length -2 )
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
