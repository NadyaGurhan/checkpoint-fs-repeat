const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt').toString().split('\n');
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt').toString().split('\n');
  const lightsaberScores = scores.map((score) => +score);
  return lightsaberScores;
}

function getStats() {
  const padawans = fs.readFileSync('data/padawans.txt').toString().split('\n');
  const result = [];
  for (let i = 0; i < padawans.length; i++) {
    result.push
  }
  return result;
}

console.log(getStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
