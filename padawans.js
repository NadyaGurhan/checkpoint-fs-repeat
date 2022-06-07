const fs = require('fs');
const padawanNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
const lightSaberScores = fs.readFileSync('./data/scores.txt', 'utf-8');

// get padawan names
function getPadawanNames() {
  return padawanNames.split('\n');
}

// get light-saber scores
function getLightsaberScores() {
  const scores = lightSaberScores.split('\n');
  const arr = [];

  for (let num of scores) {
    arr.push(+num);
  }

  return arr;
}

// get stats
function getStats() {
  const statics = [];

  const padawanNames = getPadawanNames();
  const lightSaberScores = getLightsaberScores();

  for (let i = 0; i < padawanNames.length; i++) {
    statics.push([padawanNames[i], lightSaberScores[i]]);
  }

  return statics;
}

// write stats
function writeStats() {
  const stats = getStats();
  let data = '';

  for (let elem of stats) {
    data += `${elem.join(' ')}\n`;
  }

  fs.writeFileSync('./data/stats.txt', data.trim());
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
