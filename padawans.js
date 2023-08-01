const fs = require('fs')
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
function getPadawanNames() {
  const arr = fs.readFileSync('./data/padawans.txtnp', 'utf-8').trim().split('\n');
  return arr;
}

function getLightsaberScores() {
  const arr = fs.readFileSync('./data/scores.txt', 'utf-8').trim().split('\n').map((el) => Number(el));
  return arr;
}
  
