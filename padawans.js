const fs = require('fs');
const readPadavans = fs.readFileSync('./data/padawans.txt', 'utf8');
const readScores = fs.readFileSync('./data/scores.txt', 'utf8');

function getPadawanNames() {
  const arr = readPadavans.split('\n');
  arr.pop()
  return arr;
}
function getLightsaberScores() {
  return readScores.split('\n').map((x) => parseFloat(x, 10));
}
function getStats() {
  let names = getPadawanNames();
  let scores = getLightsaberScores();
  let arr = [];
  for (let i = 0; i < names.length; i += 1) {
    arr.push([names[i], scores[i]]);
  }
  return arr;
}

function writeStats() {
  const nl = getStats();
  let str = nl.join('\n').replaceAll(',', ' ');
  return fs.writeFileSync('./data/stats.txt', str);
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
