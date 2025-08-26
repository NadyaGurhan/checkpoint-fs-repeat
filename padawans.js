const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  const names = [];
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  for (let i = 0; i < padawanNames.length - 1; i++) {
    names.push(padawanNames[i]);
  }
  return names;
}

console.log(getPadawanNames());

function getLightsaberScores() {
  const scores = [];
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < lightsaberScores.length; i++) {
    scores.push(+(lightsaberScores[i]));
  }
  return scores
}

console.log(getLightsaberScores());

// function getStats() {
//   const tabel = []
//   namesOfPadawans = getPadawanNames().split(',')
//   console.log(namesOfPadawans)
// }

// console.log(getStats())

// function writeStats() {}
