const fs = require('fs');
const padaPath = fs.readFileSync('./data/padawans.txt', 'utf-8');
const padaScore = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const pada =  padaPath.trim().split('\n');
  return pada;
}
getPadawanNames()

function getLightsaberScores() {
  const score =  padaScore.trim().split('\n').map((el) => Number(el));
  return score;
}
getLightsaberScores()

function getStats() {
  const padaArr =  padaPath.split('\n').filter((el) => el !== '');
  const scoreArr =  padaScore.split('\n').map((el) => Number(el));
  return padaArr.map((el, index) => [el, scoreArr[index]])

}
getStats()

function writeStats(){
  const data = getStats();
  const writeFile = fs.appendFileSync('./data/stats.txt', data, 'utf-8')
 return writeFile;

}
writeStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
