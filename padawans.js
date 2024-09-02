const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const newText = fs.readFileSync('./data/padawans.txt', 'utf-8');

  const names = newText.split('\n');
  names.pop();
  return names;
}
function getLightsaberScores() {
  const newNumber = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scores = newNumber.split('\n').map(Number);
  return scores;
}
function getStats() {
  const names = getPadawanNames();

  const scores = getLightsaberScores();
  const result = [];

  for (let i = 0; i < scores.length; i++) {
    result.push([names[i], scores[i]]);
  }
  return result;
}

function writeStats() {
  const allResult = getStats();

  const txtResult = allResult.map((i) =>i.join(' '));
  const newTxtResult = txtResult.join('\n');
  fs.writeFileSync('./data/stats.txt', newTxtResult);
}
