const fs = require('fs');

const padawan = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n');

function getPadawanNames() {
  const names = [];

  for (let i = 0; i < padawan.length; i++) {
    if (padawan[i].length > 0) {
      names.push(padawan[i]);
    }
  }
  return names;
}

function getLightsaberScores() {
  const arrScores = [];

  for (let i = 0; i < scores.length; i++) {
    if (scores[i].length > 0) {
      arrScores.push(scores[i]);
    }
  }
  return arrScores
}
// console.log(getLightsaberScores());

function getStats() {
  const stats = [];

  for (let i = 0; i < padawan.length; i++) {
    const name = padawan[i];
    const score = scores[i];

    if (!isNaN(score)) {
      stats.push([name, score]);
    }
  }

  return stats
}

console.log(getStats())

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
};
