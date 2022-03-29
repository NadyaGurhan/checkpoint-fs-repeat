const fs = require('fs');

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').filter((el) => el !== '');
  return padawanNames;
}
function getLightsaberScores() {
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  for (let i = 0; i < lightsaberScores.length; i++) {
    lightsaberScores[i] = +lightsaberScores[i];
  }
  return lightsaberScores;
}
function getStats() {
  const arr = [];
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').filter((el) => el !== '');
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  for (let i = 0; i < padawanNames.length; i++) {
    arr.push([padawanNames[i], +lightsaberScores[i]]);
  }
  return arr;
}
function writeStats() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n').filter((el) => el !== '');
  const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');
  for (let i = 0; i < padawanNames.length; i++) {
    if (i === padawanNames.length - 1) {
      fs.appendFileSync('./data/stats.txt', `${padawanNames[i]} ${lightsaberScores[i]}`);
    } else {
      fs.appendFileSync('./data/stats.txt', `${padawanNames[i]} ${lightsaberScores[i]}\n`);
    }
  }
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
