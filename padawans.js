const fs = require('fs');

const padawansNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
const lightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getPadawanNames() {
  const arrayPadawans = padawansNames.split('\n');
  //
  arrayPadawans.splice(arrayPadawans.length - 1, 1);
  //
  return arrayPadawans;
}

function getLightsaberScores() {
  const arrayLightsaberScores = lightsaberScores.split('\n');
  //
  for (let i = 0; i < arrayLightsaberScores.length; i++) {
    arrayLightsaberScores[i] = Number(arrayLightsaberScores[i]);
  }
  //
  return arrayLightsaberScores;
}

function getStats() {
  const padawans1 = [];
  const padawans2 = [];
  const padawans3 = [];
  const padawans4 = [];

  padawans1.push(getPadawanNames()[0]);
  padawans1.push(getLightsaberScores()[0]);
  padawans2.push(getPadawanNames()[1]);
  padawans2.push(getLightsaberScores()[1]);
  padawans3.push(getPadawanNames()[2]);
  padawans3.push(getLightsaberScores()[2]);
  padawans4.push(getPadawanNames()[3]);
  padawans4.push(getLightsaberScores()[3]);

  const stats = [];
  stats.push(padawans1);
  stats.push(padawans2);
  stats.push(padawans3);
  stats.push(padawans4);

  return stats;
}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
