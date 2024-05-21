const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
}

// console.log(getPadawanNames());

function getLightsaberScores() {
  const arr = fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map(Number);
  return arr;
}

// console.log(getLightsaberScores());

function getStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const arrOfScores = fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map(Number);

  const stats = [];
  for (let i = 0; i < padawans.length; i++) {
    stats.push([padawans[i], arrOfScores[i]]);
  }
  return stats;
}

// console.log(getStats());

function writeStats() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const arrOfScores = fs
    .readFileSync('./data/scores.txt', 'utf-8')
    .split('\n')
    .map(Number);

  const stats = [];
  for (let i = 0; i < padawans.length; i++) {
    stats.push([padawans[i], arrOfScores[i]]);
  }
  const editedStats = stats.join('\n')
  const editedStats2 = editedStats.replaceAll(',', ' ');
  // return editedStats2;
  return fs.writeFileSync('./data/stats.txt', editedStats2, 'utf-8');
}

console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
