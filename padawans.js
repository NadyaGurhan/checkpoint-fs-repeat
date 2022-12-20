const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};

function getPadawanNames() {
  const pad = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return pad;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return scores.map((el) => +(el));
}

// function getStats(pad) {

// }

// function writeStats(pad) {
// }
