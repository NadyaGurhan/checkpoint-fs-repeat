const fs = require('fs');

const puthPad = './data/padawans.txt';
const padVar = fs.readFileSync(puthPad, 'utf-8').split('\n').slice(0, -1);
const puthScores = './data/scores.txt';
const scoreVar = fs.readFileSync(puthScores, 'utf-8').split('\n').map(Number);

function getPadawanNames() {
  return padVar;
}

function getLightsaberScores() {
  return scoreVar;
}

function getStats() {
  const statsVar = [];
  for (let i = 0; i < padVar.length; i += 1) {
    statsVar.push([padVar[i], scoreVar[i]]);
  }
  return statsVar;
}
const stats = getStats();
function writeStats() {
  const regexp = /\,/g;
  const result = stats.join('\n').replace(regexp, ' ');
  return fs.writeFileSync('data/stats.txt', `${result}`);
}
writeStats();
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
