const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawanNames = padawans.trim().split('\n');
  return padawanNames;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8');
  const allScores = scores.trim().split('\n');
  const res = [];
  for (let i = 0; i < allScores.length; i += 1) {
    res.push(Number(allScores[i]));
  }
  return res;
}

function getStats() {}

function writeStats() {}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
