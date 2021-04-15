const fs = require('fs');

function getPadawanNames() {
  const getName = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  // getName.split('\n');
  return getName;
}

function getLightsaberScores() {
  const getScore = fs.readFileSync('data/scores.txt', 'utf-8');
  return getScore.split('\n').map((elem) => Number(elem));
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map();
}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
