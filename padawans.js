const fs = require('fs');

function getPadawanNames() {
  const data = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const result = data.trim().split('\r\n');
  return result;
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf-8');
  const result = data.trim().split('\r\n').map(Number);
  return result;
}

function getStats() {
  const names = getPadawanNames();
  const scores = getLightsaberScores();
  const result = [];
  for (let i = 0; i < names.length; i++) {
    result.push([names[i], scores[i]]);
  }
  return result;
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
