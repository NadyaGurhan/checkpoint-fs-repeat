const fs = require('fs')
module.exports = {
  getPadawanNames,
//   getLightsaberScores,
//   getStats,
//   writeStats,
};

function getPadawanNames() {
  let a = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').filter(names => names.length > 0);
  return a;
}
console.log(getPadawanNames())

function getLightsaberScores() {
  let b = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').filter(scores => scores.length > 0);
  for (let i = 0; i < b.length; i++) {
    b[i] = Number(b[i])
  }
  return b;
}
console.log(getLightsaberScores())
