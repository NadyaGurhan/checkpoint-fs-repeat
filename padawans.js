const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt');
}
function getLightsaberScores() {
  return fs.readFileSync('./data/scores.txt');
}
function getStats() {
  const res = [];
  for (let i = 0; i < 4; i++) {
    res.push(fs.readFileSync('./data/padawans.txt'));
  }
}
function writeStats() {
  return fs.writeFileSync('./data/stats.txt', )
}

module.exports = {
  getPadawanNames: getPadawanNames(),
  getLightsaberScores: getLightsaberScores(),
  getStats: getStats(),
  writeStats: writeStats(),
};
