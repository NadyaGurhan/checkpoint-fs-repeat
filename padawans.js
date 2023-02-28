const fs = require('fs');

const padawans = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');

function getPadawanNames() {
  return padawans.split('\n').slice(0, -1);
}

function getLightsaberScores() {
  const scoresArr = scores.split('\n');
  const result = scoresArr.map((elem) => +elem);
  return result;
}

function getStats()

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
