const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawans = data.split('\n');
  padawans.pop();
  return padawans;
}

function getLightsaberScores() {
  const data1 = fs.readFileSync('./data/scores.txt', 'utf8');
  const scores = data1.split('\n')
    .map((el) => Number(el));
    return scores
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
