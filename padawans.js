const fs = require('fs');
const { get } = require('http');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const name = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .trim('')
    .split('\n');
  return name;
}
getPadawanNames();
function getLightsaberScores() {
  const score = fs
    .readFileSync('./data/scores.txt', 'utf8')
    .split('\n')
    .map((el) => Number(el));
  console.log(score);
  return score;
}
getLightsaberScores();

function getStats() {
  const name = fs
    .readFileSync('./data/padawans.txt', 'utf-8')
    .trim('')
    .split('\n');
  const score = fs
    .readFileSync('./data/scores.txt', 'utf8')
    .split('\n')
    .map((el) => Number(el));
  const padawansScore = name.map((name, i) => [name, score[i]]);
  return padawansScore;
}

function writeStats() {
  // const name = fs
  //   .readFileSync('./data/padawans.txt', 'utf-8')
  //   .trim('')
  //   .split('\n');
  // const score = fs
  //   .readFileSync('./data/scores.txt', 'utf8')
  //   .split('\n')
  //   .map((el) => Number(el));
  // const padawansScore = name.map((name, i) => [name, score[i]]);
  const newFile = fs.writeFileSync(
    './data/stats.txt',
    getStats().join(' ').split('\n'),
  );
  return newFile;
}
writeStats();
