const fs = require('fs')


function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf-8');
  
  return data.trim().split('\n');
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf-8');

  return data.trim().split('\n').map(Number);
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const stats = [];

  for (let i = 0; i < names.length; i++) {
    stats.push([names[i], scores[i]]);
  }
  return stats;
}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
