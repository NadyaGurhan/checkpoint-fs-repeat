const fs = require('fs');

function getPadawanNames() {
  let names = [];
  names.push(fs.readFileSync('./data/padawans.txt', 'utf8'));
  return names;
}

function getLightsaberScores() {
  let scores = [];
  scores.push(fs.readFileSync('./data/scores.txt', 'utf8'));
  return scores;
}

function getStats(){};

let writeStats = fs.writeFileSync('data/stats.txt', 'getStats()');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
