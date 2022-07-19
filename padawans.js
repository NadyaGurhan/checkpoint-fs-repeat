const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return names;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  return scores;
}

function getStats() {
  const stats = [];
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < names.length; i++) {
    stats.push(names[i]);
    stats.push(scores[i]);
    return stats;
  }
}

function writeStats() {

}
