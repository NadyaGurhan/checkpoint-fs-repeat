const fs = require('fs')
const readNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
function getPadawanNames() {
  let result = readNames.split('\n');
  let fin = result.slice(0, result.length - 1);
  return fin;
}

const readScores = fs.readFileSync('./data/scores.txt', 'utf-8');
function getLightsaberScores() {
  let result = readScores.split('\n').map((el) => Number(el));
  return result;
}

const names = getPadawanNames();
const scores = getLightsaberScores();
function getStats() {
  let result = [];
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
