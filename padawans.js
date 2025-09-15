const fs = require('fs')
const { EOL } = require('os')

function getPadawanNames(){
  const list = fs.readFileSync(`data/padawans.txt`, 'utf-8').trim();
  return list.split(EOL);
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split(EOL).map((el) => Number(el));
  return scores;
}

function getStats() {
  const list = getPadawanNames();
  const scores = getLightsaberScores();
  const arrStats = [];
  for (let i = 0; i < list.length; i++) {
    arrStats.push([list[i], scores[i]]);
  }
  return arrStats;
}

function writeStats() {
  const arrStats = getStats();
  const newData = arrStats.join('\n').split(',').join(' ');
  return fs.writeFileSync('./data/stats.txt', newData);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};