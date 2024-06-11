const fs = require('fs')
function getPadawanNames() {
  let allNamesResult = [];
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const namesResult = names.split('\n');
  for (let i = 0; i < namesResult.length; i += 1) {
    const namesResult1 = namesResult.split(', ');
    allNamesResult.push(namesResult1[i]);
  }
  return allNamesResult;
}
console.log(getPadawanNames())

function getLightsaberScores() {
let score = [];
const scoreResult = fs.readFileSync('./data/scores.txt', 'utf-8');
const allScoreResult = scoreResult.split(' ');
score.push(allScoreResult);
return score;
};

function getStats() {

};

function writeStats() {

};

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
