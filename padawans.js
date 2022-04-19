const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt').toString().split('\n');
  padawans.pop();
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt').toString().split('\n');
  const lightsaberScores = scores.map((score) => +score);
  return lightsaberScores;
}

function getStats() {
  const result = [];
  for (let i = 0; i < getPadawanNames().length; i++) {
    result[i] = [getPadawanNames()[i], getLightsaberScores()[i]];
  }
  return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
