const fs = require('fs')
const path = require('path')

function getPadawanNames() {
  return fs.readFileSync(path.join(process.cwd(), 'data', 'padawans.txt'), 'utf8').split('\n') .map(name => name.trim()) 
  .filter(name => name);
}

function getLightsaberScores() {
  return fs.readFileSync(path.join(process.cwd(), 'data', 'scores.txt'), 'utf8').split('\n').map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  return names.map((name, index) => [name, scores[index]]);
}

function writeStats(stats) {
  const data = stats.map(([name, score]) => `${name} ${score}`).join('\n');
  fs.writeFileSync(path.join(process.cwd(), 'data', 'stats.txt'), data);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};