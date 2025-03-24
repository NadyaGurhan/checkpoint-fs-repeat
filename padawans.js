const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

const path = require('path');

function getPadawanNames() {
  const filePath = path.join(__dirname, 'data', 'padawans.txt');
  return fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line);
}

function getLightsaberScores() {
  const filePath = path.join(__dirname, 'data', 'scores.txt');
  return fs.readFileSync(filePath, 'utf-8')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line)
    .map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  
  return names.map((name, index) => [name, scores[index]]);
}

function writeStats(stats) {
  const filePath = path.join(__dirname, 'data', 'stats.txt');
  const content = stats
    .map(([name, score]) => `${name} ${score}`)
    .join('\n');
    
  fs.writeFileSync(filePath, content);
}