const fs = require('fs')

function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  return data.split('\n').filter(name => name.trim() !== '');
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8');
  return data.split('\n').map(score => parseFloat(score));
}

function getStats() {
  
}

function writeStats() {

}

module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
