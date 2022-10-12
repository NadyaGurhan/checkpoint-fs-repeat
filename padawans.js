const fs = require('fs');

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const readNames = fs.readFileSync('./data/padawans.txt', 'utf-8');
function getPadawanNames() {
  const result = readNames.split('\n');
  const fin = result.slice(0, result.length - 1);
  return fin;
}

// console.log(getPadawanNames())

const readScores = fs.readFileSync('./data/scores.txt', 'utf-8');
function getLightsaberScores() {
  const result = readScores.split('\n').map((el) => Number(el));
  return result;
}

// console.log(getLightsaberScores());

const names = getPadawanNames();
const scores = getLightsaberScores();
function getStats() {
  const result = [];
  for (let i = 0; i < names.length; i += 1) {
    result.push([names[i], scores[i]]);
  }
  return result;
}

// console.log(getStats());

const stat = getStats();
function writeStats() {
  const finArr = stat.map((el) => el.join(' '));
  return fs.writeFileSync('data/stats.txt', finArr.join('\n'));
}

// console.log(writeStats());
