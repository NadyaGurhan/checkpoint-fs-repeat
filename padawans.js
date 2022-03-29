const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  let splitPadawan = padawans.split('\n').slice(0, -1);
  return splitPadawan;
}

function getLightsaberScores() {
  let splitScore = scores.split('\n').slice(0, -1);
  let result = [];
  for (let i = 0; i < padawans.length; i++) {
    for (let j = 0; j < scores.length; j++) {
     result += padawans[i] + scores[j];
    }
  }
  return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
