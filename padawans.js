const fs = require('fs')

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf8');
  const arrPadawan = padawans.split('\n');
  arrPadawan.pop();
  return arrPadawan;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8');
  const arrScores = scores.split('\n');
  return arrScores;
}

function getStats() {
  const result = [];
  const arrPadawan = getPadawanNames();
  const arrScores = getLightsaberScores();
  for (let i = 0; i < arrPadawan.length; i += 1) {
    result.push([arrPadawan[i], arrScores[i]]);
  }
  return result;
}

function  writeStats() {
  const stats = getStats();
  for (let i = 0; i < stats.length; i += 1) {
    fs.appendFileSync('./data/stats.txt', `${stats[i]}\n`);
  }
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
