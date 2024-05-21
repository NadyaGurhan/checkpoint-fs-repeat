const fs = require('fs');

function getPadawanNames() {
  const listPadawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const padawanArray = listPadawans.split('\n');
  const filteredPadawanArray = padawanArray.filter((name) => name.trim() !== '');
  return filteredPadawanArray;
}

function getLightsaberScores() {
  const listScores = fs.readFileSync('./data/scores.txt', 'utf8');
  const scoresArray = listScores.split('\n');
  const filteredScores = scoresArray.filter((name) => name.trim() !== '');
  const numberScores = filteredScores.map(Number);
  return numberScores;
}

function getStats() {
  const names = getPadawanNames;
  const score = getLightsaberScores;

  const padawanData = names.map((name, i) => [name, score[i]]);
  return padawanData;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
