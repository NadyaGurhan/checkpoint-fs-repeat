const fs = require('fs');
const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');

function getPadawanNames(padawans) {
  return padawans
    .split('\n')
    .map((el) => el.trim())
    .filter((el) => el.length > 0);
}

const scores = fs.readFileSync('./data/scores.txt', 'utf-8');

function getLightsaberScores(scores) {
  return scores
    .split('\n')
    .map((el) => el.trim())
    .filter((el) => el.length > 0)
    .map((el) => el - 0);
}

function getStats(padawans, scores) {
  const result = [];
  for (let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], scores[i]]);
  }
  return result;
}

console.log(getStats(getPadawanNames(padawans), getLightsaberScores(scores)));

function writeStats(func) {
  const stats = `./data/stats.txt`;
  fs.writeFileSync(stats, func.join('\n'), 'utf-8');
}

console.log(writeStats(getStats(getPadawanNames(padawans), getLightsaberScores(scores))));

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
