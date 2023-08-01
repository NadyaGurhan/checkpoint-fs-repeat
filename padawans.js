const fs = require('fs');
const { dirname } = require('path');

function getPadawanNames() {
  const text = fs.readFileSync(`${__dirname}/data/padawans.txt`, 'utf-8');
  const padawans = text.split('\n').slice(0, -1);
  return padawans;
}

function getLightsaberScores() {
  const scores = fs.readFileSync(`${__dirname}/data/scores.txt`, 'utf-8');
  const scores1 = scores.split('\n').map((scores) => Number(scores));
  return scores1;
}
function getStats() {
  const allpadawans = getPadawanNames;
  const allscores = getLightsaberScores;
  const stats = [];
  const stat = allpadawans.map((el, i) => stats.push([el, scores[i]]));
  return stats;
}
console.log(getStats);

function writeStats() {
  const allstats = getStats();
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
