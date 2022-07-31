const fs = require('fs');

function getPadawanNames() {
  const padawansName = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return padawansName;
}
getPadawanNames();

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  const allScores = scores.map(Number);
  return allScores;
}
const padawanScore = getLightsaberScores();
const padawanName = getPadawanNames();

function getStats() {
  const result = [];

  for (let i = 0; i < padawanScore.length; i++) {
    result.push([padawanName[i], padawanScore[i]]);
  }
  return result;
}

function writeStats() {
  const result = [];
  let str = '';
  const fileName = './data/stats.txt';

  for (let i = 0; i < padawanName.length; i++) {
    result.push(`${padawanName[i]} ${padawanScore[i]}`);
  }
  str = result.join('\n');

  return fs.writeFileSync(fileName, `${str}`);
}

writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
