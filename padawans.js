const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
padawans.length -= 1;

function getPadawanNames() {
  return padawans;
}

let scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');

function getLightsaberScores() {
  scores = scores.map(Number);
  return scores;
}

const stats = [];

function getStats() {
  for (let i = 0; i < scores.length; i += 1) {
    stats[i] = [padawans[i], scores[i]];
  }
  return stats;
}
const str = stats.join('\n');
const filePath = 'data/stats.txt';

console.log(str);

function writeStats() {
  return fs.writeFileSync(filePath, str);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
