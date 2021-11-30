const fs = require('fs');

function getPadawanNames() {
  const names = [];
  const text = fs.readFileSync('./data/padawans.txt', 'utf-8')
    .toString()
    .split('\n')
    .forEach((element) => {
      if (element !== '') {
        names.push(element);
      }
      return names;
    });
  return names;
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const scores = [];
  const score = fs.readFileSync('./data/scores.txt', 'utf-8')
    .toString()
    .split('\n')
    .forEach((element) => {
      if (element !== '') {
        scores.push(Number(element));
      }
      return scores;
    });
  return scores;
}
console.log(getLightsaberScores());

function getStats() {}
// function writeStats() {}

// module.exports = {
//   getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
// };
