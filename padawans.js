const fs = require('fs');

function getPadawanNames() {
  const padawanNames = fs.readFileSync('data/padawans.txt', 'utf-8').trim();
  const arrPadawanNames = padawanNames.split('\n');
  return arrPadawanNames;
}

function getLightsaberScores() {
  const lightsaberScores = fs.readFileSync('data/scores.txt', 'utf-8').trim();
  const arrlightsaberScores = lightsaberScores.split('\n');
  return arrlightsaberScores.map((el) => el * 1);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const res = [];

  for (let i = 0; i < names.length; i += 1) {
    res.push([names[i], scores[i]]);
  }
  return res;
}

function writeStats() {
  const stats = getStats();
  const res = stats.map((el) => {
    return el.join(', ');
  });
  console.log(res);
  
  fs.appendFileSync('data/stats.txt', res, 'utf-8');
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
