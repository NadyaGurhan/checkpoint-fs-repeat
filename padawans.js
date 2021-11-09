/* eslint-disable no-console */
const fs = require('fs');

function getPadawanNames() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  return names;
}
getPadawanNames();

function getLightsaberScores() {
  scoreArr = [];
  const names = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  names.forEach((x) => scoreArr.push(Number(x)));
  return scoreArr;
}
getLightsaberScores();

function getStats() {
  const stats = [];
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  for (let i = 0; i < names.length; i += 1) {
    stats.push([names[i], Number(score[i])]);
  }
  return stats;
}
getStats();

function writeStats() {
  const names = fs.readFileSync('./data/padawans.txt', 'utf-8').trim().split('\n');
  console.log(names);
  const score = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  console.log(score);
  
  // const result = fs.writeFileSync('./data/stats.txt', data.trim());
}
writeStats();

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
