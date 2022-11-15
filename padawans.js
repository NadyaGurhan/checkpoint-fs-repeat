const fs = require('fs');

function getPadawanNames() {
  const readNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const result = readNames.split('\n');
  const fin = result.slice(0, result.length - 1);
  return fin;
}

function getLightsaberScores() {
  const readScores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const scores = readScores.split('\n').map((el) => Number(el));
  return scores;
}

const names = getPadawanNames();
const scores = getLightsaberScores();
function getStats() {
  const result = [];
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], scores[i]]);
  }
  return result;
}
const stat = getStats();
function writeStats() {
  const finArray = stat.map((el) => el.join(' '));
  return fs.writeFileSync('data/stats.txt', finArray.join('\n'));
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
