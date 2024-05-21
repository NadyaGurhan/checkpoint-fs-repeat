const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8');
  return data.trim().split('\n');
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf-8');
  const scoresData = data.split('\n').map((el) => Number(el));
  return scoresData;
}

function getStats() {
  const dataPad = getPadawanNames();
  const dataScor = getLightsaberScores();
  return dataPad.map((el, i) => [el, Number(dataScor[i])]);
}

function writeStats() {
  const data = getStats();
  const writeData = fs.writeFileSync('data/stats.txt', data.join('\n').replaceAll(',', ' '));
  return writeData;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
