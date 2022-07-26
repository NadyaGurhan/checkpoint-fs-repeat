const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

function getPadawanNames() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  let result = names.pop();
  return names;
};

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  let arr = [];
  for (let i = 0; i < scores.length; i++) {
    scores[i] = +scores[i];
    arr.push(scores[i]);
  }
  return arr;
};

function getStats() {
  let array = [];
  let names = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  for (let i = 0; i < names.length; i++) {
    array.push(names[i]);
    for (let j = 0; j < array.length; j++) {
      for (let a = 0; a < scores.length; a++) {
        array[j].push(scores[a]);
      }
    }
  }
  return array;
}
