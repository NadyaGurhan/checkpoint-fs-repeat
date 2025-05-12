const fs = require('fs');

function getPadawanNames() {
  const file = fs.readFileSync('./data/padawans.txt', 'utf-8');
  const result = file.trim().split('\r\n');
  return result;
}

function getLightsaberScores() {
  const data = fs.readFileSync('./data/scores.txt', 'utf-8');
  const result = data.trim().split('\r\n').map(Number);
  console.log (result)
  return result;
}




module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  // writeStats,
};
