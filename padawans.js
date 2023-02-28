const fs = require('fs');

const padawans = fs
  .readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8')
  .split('\n')
  .slice(0, -1);
const scores = fs
  .readFileSync(`${__dirname}/data/scores.txt`, 'utf-8')
  .split('\n');

function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  const result = scores.map((elem) => +elem);
  return result;
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  // getStats,
  // writeStats,
};
