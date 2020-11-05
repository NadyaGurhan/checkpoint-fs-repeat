const fs = require('fs');

function getPadawanNames() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return names;
}
function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
  scores = scores.map( (el) => el * 1);
  return scores;
}
function getStats() {
  
}
function writeStats() {
  for (let i = 0; i < arr.length; i++) {
    fs.writeFileSync('data/stats.txt', arr[i]);
  }
}
console.log(getLightsaberScores())


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
