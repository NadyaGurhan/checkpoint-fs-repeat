const fs = require('fs');
const { EOL } = require('os');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const namesArr = padawanNames.split('\n');
  namesArr.pop();
  return namesArr;
}
// getPadawanNames()

function getLightsaberScores() {
  const LightsaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const saberScores = LightsaberScores.split('\n');
  const scores = saberScores.map(Number);
  return scores;
}
// getLightsaberScores()

function getStats() {
  const padawanNames = getPadawanNames();
  const lightsaberScores = getLightsaberScores();
  let arr = [];
  for (let i = 0; i < padawanNames.length; i++) {
    arr.push([padawanNames[i], lightsaberScores[i]]);
  }
  return arr;
}
// getStats();

function writeStats() {
  const stats = getStats();
  const newArray = [];

  stats.forEach(function (elem) {
    newArray.push(elem + '');
  });
  const arr = newArray.join(EOL).replaceAll(',', ' ') + EOL;
  return fs.writeFileSync('./data/stats.txt', arr);
}

// writeStats();
