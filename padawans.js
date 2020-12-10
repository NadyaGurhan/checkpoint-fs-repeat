const fs = require('fs');

function getPadawanNames() {
  let padawans = fs.readFileSync('data/padawans.txt', 'utf-8');
  let padawanNames = padawans.split('\n');
  padawanNames.pop();
  return padawanNames;
}

function getLightsaberScores() {
  let data = fs.readFileSync('data/scores.txt', 'utf-8');
  let scoresStrings = data.split('\n');
  let scores = scoresStrings.map(el => +el)
  return scores;
}

function getStats() {
  let padawans = fs.readFileSync('data/padawans.txt', 'utf-8');
  let padawanNames = padawans.split('\n');
  padawanNames.pop();

  let data = fs.readFileSync('data/scores.txt', 'utf-8');
  let scoresStrings = data.split('\n');
  let scores = scoresStrings.map(el => +el);

  let stats = padawanNames.map((el, i) => el = [el, scores[i]])
  return stats
}

function writeStats(stats) {
  let result = stats.join('\n').replaceAll(',', ' ');
  fs.writeFileSync('data/stats.txt', result)
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
