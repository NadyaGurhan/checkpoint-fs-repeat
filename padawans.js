const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const { EOL } = require('os');

function getPadawanNames() {
  const padawans = fs.readFileSync('data/padawans.txt', 'utf-8');
  return padawans.split(EOL).splice(0, 4);
}

function getLightsaberScores() {
  const scores = fs.readFileSync('data/scores.txt', 'utf-8').split(EOL);
  const newScores = scores.map((el) => Number(el));
  return newScores;
}

function getStats() {
  const padawans = fs.readFileSync('data/padawans.txt', 'utf-8').split(EOL).splice(0, 4);
  const scores = fs.readFileSync('data/scores.txt', 'utf-8').split(EOL);
  const newScores = scores.map((el) => Number(el));
  const arr = [
    [padawans[0], newScores[0]],
    [padawans[1], newScores[1]],
    [padawans[2], newScores[2]],
    [padawans[3], newScores[3]],
  ];
  return arr;
}

function writeStats(stats) {
  const newArr = stats.map((el) => el.join(' ')).join('\n');
  fs.writeFileSync('data/stats.txt', newArr, 'utf8');
}
