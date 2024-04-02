const fs = require('fs');
const { get } = require('http');

const getPadawanNames = () => read = ((fs.readFileSync('./data/padawans.txt', 'utf-8')).trim()).split('\n');
getPadawanNames();

const getLightsaberScores = () => read = ((fs.readFileSync('data/scores.txt', 'utf-8')).split('\n')).map((el) => Number(el));
const getStats = () => {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
};
getStats();

const writeStats = () => {
  const stats = getStats();
  const formattedStats = stats.map((stat) => stat.join(' ')).join('\n');
  return fs.writeFileSync('./data/stats.txt', formattedStats, 'utf-8');
};
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
