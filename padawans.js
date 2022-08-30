const fs = require('fs');
const { get } = require('http');
const path = require('path');

function getPadawanNames() {
  const padawan = fs.readFileSync('./data/padawans.txt', 'utf8').split('\n');
  padawan.pop();
  return padawan;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf8').split('\n').map((el) => +el);
  return scores;
}

function getStats() {
  const mass = [];
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < names.length; i++) {
    mass.push([names[i], scores[i]]);
  }
  return mass;
}

function writeStats() {
  const stats = getStats();
  return fs.appendFileSync('./data/stats.txt', `${stats.join('\n').split(',').join(' ')}`);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
