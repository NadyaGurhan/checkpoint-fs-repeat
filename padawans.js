const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames(names) {
  const newArr = [];
  for (let i = 0; i < names.length; i++) {
    newArr.push(names[i]);
  }
  return newArr;
}

function getLightsaberScores(names, scores) {
  const arr = [];
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < scores.length; j++) {
      if (names[i] === scores[j]) {
        arr.push(scores[j]);
      }
    }
  }
  return arr;
}

function getStats() {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++ ) {
    for (let j = 0; j < scores.length; j++) {
      if (names[i] === scores[j]) {
        arr2.push(names[i] === scores[j])
      }
  }
}
}
