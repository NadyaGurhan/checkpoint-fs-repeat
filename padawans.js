const fs = require('fs');

function getPadawanNames() {
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const arr = [];
  const padawans = padawan.split('\n');
  for (let i = 0; i < padawans.length - 1; i++) {
    arr.push(padawans[i]);
  }
  return arr;
}

function getLightsaberScores() {
  const score = fs.readFileSync('./data/scores.txt', 'utf-8');
  const arr = [];
  const scores = score.split('\n');
  for (let i = 0; i < scores.length; i++) {
    arr.push(Number(scores[i]));
  }
  return arr;
}

function getStats() {
  const arrNames = getPadawanNames();
  const arrScores = getLightsaberScores();
  const table = arrNames.map((el, index) => [el, arrScores[index]]);
  return table;
}

// function writeStats() {
//   fs.writeFileSync('./data/stats.txt', getStats())
// }

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
