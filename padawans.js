const fs = require('fs');

function readLinesFromFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return fileContent.trim().split('\n');
}

function getPadawanNames() {
  const filePath = 'data/padawans.txt';
  return readLinesFromFile(filePath);
}

function getLightsaberScores() {
  const filePath = 'data/scores.txt';
  const scores = readLinesFromFile(filePath);
  return scores.map(Number);
}

function getStats() {
  const padawanNames = getPadawanNames();
  const lightsaberScores = getLightsaberScores();
  const stats = [];
  for (let i = 0; i < padawanNames.length; i++) {
    stats.push([padawanNames[i], lightsaberScores[i]]);
  }
  return stats;
}

function writeStats(stats) {
  const filePath = 'data/stats.txt';
  const lines = stats.map(([name, score]) => `${name} ${score}`);
  const fileContent = lines.join('\n');
  fs.writeFileSync(filePath, fileContent);
}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
