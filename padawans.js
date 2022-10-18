const fs = require('fs');

function getPadawanNames() {
  return fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return scores.map((el) => Number(el));
}

function getStats() {
  const padawan = getPadawanNames();
  const score = getLightsaberScores();
  const result = [];
  for (let i = 0; i < padawan.length; i += 1) {
    result.push([padawan[i], score[i]]);
  }
  return result;
}

function writeStats() {
  // не успела сделать
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
