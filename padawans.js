const fs = require('fs')


function getPadawanNames() {
  const data = fs.readFileSync('data/padawans.txt', 'utf8');
  return data.trim().split('\n');
}

function getLightsaberScores() {
  const data = fs.readFileSync('data/scores.txt', 'utf8');
  const lines = data.trim().split('\n');
  return lines.map((elem) => parseFloat(elem, 10));
}


module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
