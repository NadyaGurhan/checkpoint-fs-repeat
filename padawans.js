/* eslint-disable no-plusplus */
const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf-8');
  return data.split('\n').slice(0, -1);
}

// console.log(getPadawanNames());

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf-8');
  return data.split('\n').map((el) => Number(el));
}

// console.log(getLightsaberScores());

function getStats() {
  const names = getPadawanNames();
  const skills = getLightsaberScores();
  const result = [];
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], skills[i]]);
  }
  return result;
}

// console.log(getStats());

function writeStats() {
  const data = getStats().join('\n').replaceAll(',',' ');
  fs.writeFileSync('data/stats.txt', data, 'utf-8');
}

console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
