const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};

function getPadawanNames() {
  const list = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return list;
}

function getLightsaberScores() {
  const list = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  return list;
}

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
  return padawans.concat(scores);
}
