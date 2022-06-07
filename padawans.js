const fs = require('fs');

function getPadawanNames() {
  let padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawans.slice(0, padawans.length - 1);
}
// console.log(getPadawanNames())

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  let scoresNum = [];
  for (let i = 0; i < scores.length; i++) {
    scoresNum.push(Number(scores[i]));
  }
  return scoresNum;
}

// console.log(getLightsaberScores())


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
