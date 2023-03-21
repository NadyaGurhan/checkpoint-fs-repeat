const fs = require('fs');

const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getLightsaberScoresFun() {
  return scores.trim().split('\n');
}

module.exports = getLightsaberScores;