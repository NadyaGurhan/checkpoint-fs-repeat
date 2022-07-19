const fs = require('fs');

function getPadawanNames() {
  const padawansList = fs.readFileSync('data/padawans.txt', 'utf8').split('\n');
  padawansList.pop();
  return padawansList;
}

function getLightsaberScores() {
  const scoresList = fs.readFileSync('data/scores.txt', 'utf8').split('\n');
  const res = scoresList.map((score) => parseFloat(score));
  return res;
}

function getStats() {
  const padawansList = getPadawanNames();
  const scoresList = getLightsaberScores();
  const res = [];
  for (let i = 0; i < padawansList.length; i += 1) {
    res.push([padawansList[i], scoresList[i]]);
  }
  return res;
}

function writeStats() {
  const padawansList = getPadawanNames();
  const scoresList = getLightsaberScores();
  for (let i = 0; i < padawansList.length - 1; i += 1) {
    fs.appendFileSync('data/stats.txt', `${padawansList[i]} ${scoresList[i]}\n`);
  }
  fs.appendFileSync('data/stats.txt', `${padawansList[padawansList.length - 1]} ${scoresList[scoresList.length - 1]}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
