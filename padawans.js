const fs = require('fs');

function getPadawanNames() {
  const dataOfPadawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const padawanNames = dataOfPadawans.split('\n');
  padawanNames.pop();
  return padawanNames;
}
function getLightsaberScores() {
  const dataofscores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scores = dataofscores.split('\n');
  for (let i = 0; i < scores.length; i += i) {
    scores[i] = +scores[i];
  }
  return scores;
}
function getStats() {

}
function writeStats() {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
