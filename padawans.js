const fs = require('fs')

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  return padawanNames.filter((str) => str !== '');
}

function getLightsaberScores() {
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return lightsaberScores.map((str) => +str);
}

function getStats() {
  const padawanNames = getPadawanNames();
  const lightsaberScores = getLightsaberScores();
  return padawanNames.map((x, i) => [x, lightsaberScores[i]]);
}

function writeStats() {
  const padawanNames = getPadawanNames();
  const lightsaberScores = getLightsaberScores();
  fs.writeFileSync('./data/stats.txt', `${padawanNames[0]} ${lightsaberScores[0]}`);
  for (let i = 1; i < padawanNames.length; i++) {
    fs.appendFileSync('./data/stats.txt', `\n${padawanNames[i]} ${lightsaberScores[i]}`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
