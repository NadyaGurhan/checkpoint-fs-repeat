const { log } = require('console');
const fs = require('fs');
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const getPadawan = fs.readFileSync('./data/padawans.txt', 'utf8');
  const getArrPadawan = getPadawan.split('\n').filter(Boolean);

  return getArrPadawan;
}
console.log(getPadawanNames());

function getLightsaberScores() {
  const getScores = fs.readFileSync('./data/scores.txt', 'utf8');
  const getArrScores = getScores.split('\n');
  return getArrScores.map(Number);
}
console.log(getLightsaberScores());

function getStats() {
  const padawans = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];

  for (let i = 0; i < padawans.length; i++) {
    result.push([padawans[i], scores[i]]);
  }

  return result;
}
console.log(getStats());

function writeStats() {
  const fs = require('fs');
  const data = getStats();
  const textData = data.map((item) => item.join(' ')).join('\n');

  return fs.writeFileSync('./data/stats.txt', textData, 'utf8');
}
writeStats();
