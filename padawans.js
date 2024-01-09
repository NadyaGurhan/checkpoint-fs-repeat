const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => Number(el));
  return scores;
}

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  let status = padawans.map()

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
