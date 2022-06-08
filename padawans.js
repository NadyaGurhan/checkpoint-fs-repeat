const fs = require('fs');



function getPadawanNames() {
  const padawanNames = fs.readFileSync('data/padawans.txt', 'utf-8');
  const names = padawanNames.trim().split('\n');
  return names;
}
const names = getPadawanNames();

function getLightsaberScores() {
  const lightsaberScore = fs.readFileSync('data/scores.txt', 'utf-8');
  const score = lightsaberScore.split('\n').map(el => +el);
  return score;
}

const score = getLightsaberScores();

function getStats() {
  const result = [];
  for (let i = 0; i < names.length; i += 1) {
    result[i] = Array.of(names[i]);
  }
  for (let j = 0; j < score.length; j += 1) {
    result[j][1] = score[j];
  }
 return result;
}

const namesScore = getStats();

function writeStats() {
const string = namesScore.map(el => el.join(' ')).join('\n');

fs.writeFileSync('data/stats.txt', '');
fs.appendFileSync('data/stats.txt', `${string}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
