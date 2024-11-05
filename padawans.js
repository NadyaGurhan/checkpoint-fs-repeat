const fs = require('fs');
function getPadawanNames() {
  return fs.readFileSync(`./data/padawans.txt`, 'utf8').trim().split('\n');
}
function getLightsaberScores() {
  return fs.readFileSync(`./data/scores.txt`, 'utf8').trim().split('\n').map(Number);
}
function getStats() {
  const names = fs.readFileSync(`./data/padawans.txt`, 'utf8').trim().split('\n');
  const scores = fs
    .readFileSync(`./data/scores.txt`, 'utf8')
    .trim()
    .split('\n')
    .map(Number);
  const stats = names.map((name, i) => [name, scores[i]]);
  return stats;
}
function writeStats() {
  const names = fs.readFileSync(`./data/padawans.txt`, 'utf8').trim().split('\n');
  const scores = fs
    .readFileSync(`./data/scores.txt`, 'utf8')
    .trim()
    .split('\n')
  
  const stats = names.map((name, i) => `${name} ${scores[i]}`).join('\n')
  fs.writeFileSync('./data/stats.txt', stats, 'utf-8');
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};