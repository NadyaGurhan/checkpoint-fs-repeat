const { isUtf8 } = require('buffer');
const fs = require('fs');
const path = require('path');

function readFile() {
  return fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
}

function getPadawanNames() {
  const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
  const result = padawans.split('\n');
  result.pop();
  return result;
}

function getLightsaberScores() {
  const score = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8').split('\n');
  return score;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
