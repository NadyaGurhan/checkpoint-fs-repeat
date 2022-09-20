const fs = require('fs');
function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
return padawans;
}
function getLightsaberScores() {
  let LightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
  return LightsaberScores.map(el=> +el)
}
function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  let LightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n');
  LightsaberScores = LightsaberScores.map(el => +el);
  
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
//   getStats,
//   writeStats,
};
