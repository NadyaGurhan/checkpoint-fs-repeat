const fs = require('fs');

function getPadawanNames() {
  const result = fs.readFileSync('./data/padawans.txt', 'utf8')
    .split('\n')
    .filter(el => el.length > 0);
  return result;
}

function getLightsaberScores() {
  const result = fs.readFileSync('./data/scores.txt', 'utf8')
    .split('\n')
    .filter(el => el.length > 0)
    .map(el => Number(el));
  return result;
}

function getStats() {
  const names = getPadawanNames('./data/padawans.txt');
  const scores = getLightsaberScores('./data/scores.txt');
  const result = [];
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], scores[i]]);
  }
  return result;
}

function writeStats(stats) {
  let result = stats.join('\n').replace(/,/g, ' ')
  fs.writeFileSync(`./data/stats.txt`, result, 'utf8');
}

let x = getStats();
console.log(writeStats(x))

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
