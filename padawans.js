const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8');
  return data.split('\n').filter(s => s);
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf-8');
  return data.split('\n').filter(s => s).map(Number);
}

function getStats() {
  const arrNames = getPadawanNames();
  const arrScores = getLightsaberScores();
  let res = [];

  for (let i = 0; i < arrNames.length; i++) {
    res.push([arrNames[i], arrScores[i]]);
  }
  return res;
}

function writeStats() {
  const stats = getStats();

  fs.writeFileSync('data/stats.txt', stats.join('\n').replaceAll(',', ' '));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
