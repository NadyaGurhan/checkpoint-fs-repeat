const fs = require('fs');

function getPadawanNames() {
  const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const result = padawans.split('\n');
  return result;
}

function getLightsaberScores() {
  const scores = fs.readFileSync('./data/scores.txt', 'utf-8');
  const result = scores.split('\n');
  return result;
}

function getStats() {
  const padawansStats = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const scoresStats = fs.readFileSync('./data/scores.txt', 'utf-8');
  const result = [];

  for (let i = 0; i < padawansStats.length; i += 1) {
    result.push([padawansStats[i], scoresStats[i]]);
  }
  return result;
}
function writeStats() {

}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
