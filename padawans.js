const fs = require('fs');
const path = require('path');

const names = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf8').split('\n');
const sabersString = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf8').split('\n');
const sabers = sabersString.map((saber) => parseFloat(saber));
const scores = names.map((name) => name.split(','));
scores.map((score) => score.push(sabers[scores.indexOf(score)]));
console.log(scores);

function getPadawanNames() {
  return names;
}

function getLightsaberScores() {
  return sabers;
}

function getStats() {
  return scores;
}

function writeStats(data) {
  fs.writeFileSync(path.join(__dirname, 'data/stats.txt'), data.join('\n').replaceAll(',', ' '), 'utf8');
}

writeStats(scores);

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
