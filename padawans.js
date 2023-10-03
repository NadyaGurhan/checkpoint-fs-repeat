const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};

function getPadawanNames() {
  const filePath = 'data/padawans.txt';
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const names = fileContent.split('\n').map(name => name.trim());
  return names;
};

function getLightsaberScores() {
  const filePath = 'data/scores.txt';
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const scores = fileContent.split('\n').map(score => parseFloat(score.trim()));
  return scores;
};

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = names.map((name, index) => [name, scores[index]]);
  return stats;
};

function writeStats(stats) {
  const filePath = 'data/stats.txt';
  const data = stats.map(([name, score]) => `${name} ${score}`).join('\n');
  fs.writeFileSync(filePath, data);
};

