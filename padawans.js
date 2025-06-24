const { log } = require('console');
const { EOL } = require('os');
const fs = require('fs');
function getPadawanNames() {
  let names = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n');
  const padawans = names.pop();
  return names;
}

function getLightsaberScores() {
  let scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n');
  return scores.map((el) => el - 0);
}

function getStats() {
  const stats = getPadawanNames();
  const scores = getLightsaberScores();
  for (let i = 0; i < stats.length; i++) {
    stats[i] = stats[i].split(',');
  }
  stats.map((el, ind) => el.push(scores[ind]));
  return stats;
}

function writeStats() {
  let stats = getStats();
  const stats2 = stats.map((el) => el.join(' '));
  fs.writeFileSync('./data/stats.txt', stats2.join(EOL));
}
console.log(writeStats());

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
